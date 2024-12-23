import express, { query } from 'express';
import fs from 'fs';
import mysql from 'mysql2';
import path from 'path';
import multer from 'multer';

const app = express();

let user; //Инфомрация о пользователе

//Настройка подключения к бд
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 3000,
    user: 'root',
    database: 'hospitalmanager',
});

//Создание парсера
const urlcodedParsers = express.urlencoded({extended: false});

//JSON парсер
const JSONParser = express.json();

//Указание пути к файлом hbs
app.use(express.static(path.join(fs.realpathSync('.') + '/public')));
app.set('view engine', 'hbs');

//Настройка работы с файлами пользователя
const storageFile = multer.diskStorage({
    destination: (req, file, cd)=>{
        cd(null, 'public/img/profile');
    },
    filename: (req, file, cd)=>{
        cd(null, file.originalname);
    },
});

const upload = multer({storage: storageFile});

app.get('/', (_, res)=>{
    return res.render('index.hbs');
});

app.get('/singOut', (_, res)=>{
    return res.render('singOut.hbs');
});

app.listen(3000, ()=>{
    return console.log('Server ative. URL: http://localhost:3000/');
});

//Преобразование даты из бд в нормальный вид
function validDate(date){
    let arr = String(date).split(' ');

    let listMonth = {
        "Jan": "Января",
        "Feb": "Февраля",
        "Mar": "Марта",
        "Apr": "Апреля",
        "May": "Мая",
        "June": "Июня",
        "July": "Июля",
        "Aug": "Августа",
        "Sept": "Сентября",
        "Oct": "Октября",
        "Nov": "Ноября",
        "Dec": "Декабря",
    }

    return `${arr[2]} ${listMonth[arr[1]]} ${arr[3]}`;
}
