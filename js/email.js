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