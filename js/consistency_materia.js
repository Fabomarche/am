const btnCarrera = document.getElementById('carrerraSpan')
const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer

if(sessionStorage.getItem('carrerra')){
    btnCarrera.innerText = sessionStorage.getItem('carrerra')
    btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
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


