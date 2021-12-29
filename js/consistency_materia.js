const spanCarrera = document.getElementById('carrerraSpan')
const spanCarrera2 = document.getElementById('carrerraSpan2')
const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer

if(sessionStorage.getItem('carrerra')){
    spanCarrera.innerText = sessionStorage.getItem('carrerra')
    spanCarrera2.innerText = sessionStorage.getItem('carrerra')
    consistency_testimonios()
    // btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
}

// const changeCarrera = () => {
//     if(btnCarrera.innerText === sessionStorage.getItem('carrerra')){
//         btnCarrera.innerText = sessionStorage.getItem('!carrerra')
//         btnCambiarCarrera.innerHTML = sessionStorage.getItem('carrerra')
//     }else{
//         btnCarrera.innerText = sessionStorage.getItem('carrerra')
//         btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
// }
    
// }


