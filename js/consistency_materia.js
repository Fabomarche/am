const btnCarrera = document.getElementById('carrerraSpan')
const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer

if(sessionStorage.getItem('carrerra')){
    btnCarrera.innerText = sessionStorage.getItem('carrerra')
    btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
}

const changeCarrera = () => {
    if(btnCarrera.innerText === sessionStorage.getItem('carrerra')){
        btnCarrera.innerText = sessionStorage.getItem('!carrerra')
        btnCambiarCarrera.innerHTML = sessionStorage.getItem('carrerra')
    }else{
        btnCarrera.innerText = sessionStorage.getItem('carrerra')
        btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
}
    
}


/*-----------------------------EMAIL.JS---------------------------------*/
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.innerText = 'Enviando...';

const serviceID = 'service_fawbewr';
const templateID = 'template_xmd0wov';

emailjs.sendForm(serviceID, templateID, this)
.then(() => {
    btn.innerText = 'Enviar';
    alert('Mensaje enviado!');
}, (err) => {
    btn.innerText = 'Enviar';
    alert(JSON.stringify(err));
    });
});

/*-----------------------------END EMAIL.JS---------------------------------*/