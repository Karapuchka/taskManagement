const form = document.forms.login;

form.onclick = (e)=>{

    if(!e.target.id == 'btn-login'){
        for (let i = 0; i < form.elements.length - 1; i++) {
            if(form.elements[i].value == ''){        
                e.preventDefault();
                gsap.to(form.elements[i], {boxShadow: '0 0 10px red'}, {duration: .4})
                gsap.to(form.elements[i].parentNode.children[0], {color: 'red'}, {duration: .4})
            }        
        }
    }
}

for (let i = 0; i < form.elements.length - 1; i++) {
    form.elements[i].oninput = (e)=>{
        form.elements[i].style.boxShadow = 'none';
        form.elements[i].parentNode.children[0].style.color = 'black';
    }
}