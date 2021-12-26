const modal = document.getElementById('modal')
const btnCarrera = document.getElementById('carrerraSpan')
const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer

if(sessionStorage.getItem('carrerra')){
    modal.style.display = "none"
    btnCarrera.innerText = sessionStorage.getItem('carrerra')
    btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')
}

const renderArquitectura = () => {
    modal.style.display = "none"
    sessionStorage.setItem('carrerra', "Arquitectura")
    sessionStorage.setItem('!carrerra', "Medicina")
    btnCarrera.innerText = sessionStorage.getItem('carrerra')
    btnCambiarCarrera.innerHTML = sessionStorage.getItem('!carrerra')

}

const renderMedicina = () => {
    modal.style.display = "none"
    sessionStorage.setItem('carrerra', "Medicina")
    sessionStorage.setItem('!carrerra', "Arquitectura")
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

