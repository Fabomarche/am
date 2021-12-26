const modal = document.getElementById('modal')
const btnCarrera = document.getElementById('carrerraSpan')
const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer
let carrerra = ""


const renderArquitectura = () => {
    modal.style.display = "none"
    carrerra = "Arquitectura"
    btnCarrera.innerText = carrerra
    btnCambiarCarrera.innerHTML = "Medicina"

}

const renderMedicina = () => {
    modal.style.display = "none"
    carrerra = "Medicina"
    btnCarrera.innerText = carrerra
    btnCambiarCarrera.innerHTML = "Arquitectura"
}