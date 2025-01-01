const btnPasswdEye = document.getElementById('js-eye-passwd'); // Кнопка показа\скрытия пароля
let inputPasswd = document.getElementById('input-password');

btnPasswdEye.addEventListener('pointerdown', ()=>{
    
    if(inputPasswd.dataset.psopen === 'true'){
        
        btnPasswdEye.setAttribute('src', '/img/eye_close.png');
        inputPasswd.setAttribute('type', 'text');
        inputPasswd.dataset.psopen = 'false';

    } else {
        
        btnPasswdEye.setAttribute('src', '/img/eye_open.png');
        inputPasswd.setAttribute('type', 'password');
        inputPasswd.dataset.psopen = 'true';
    }    
});