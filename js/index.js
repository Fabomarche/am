const body = document.querySelector('.index-body')
const modal = document.getElementById('modal')
const spanCarrera = document.getElementById('carrerraSpan')
// const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer

// if(sessionStorage.getItem('carrerra')){
//     modal.style.display = "none"
//     btnCarrera.innerText = sessionStorage.getItem('carrerra')
//     // btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
// }

const renderArquitectura = () => {
    modal.style.display = "none"
    sessionStorage.setItem('carrerra', "Arquitectura")
    // sessionStorage.setItem('!carrerra', "Medicina")
    spanCarrera.innerText = sessionStorage.getItem('carrerra')
    consistency_testimonios()
    body.style.overflow = "scroll"
    // btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
}

const renderMedicina = () => {
    modal.style.display = "none"
    sessionStorage.setItem('carrerra', "Medicina")
    // sessionStorage.setItem('!carrerra', "Arquitectura")
    spanCarrera.innerText = sessionStorage.getItem('carrerra')
    body.style.overflow = "scroll"
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

