const body = document.querySelector('.index-body')
const modal = document.getElementById('modal')
const spanCarrera = document.getElementById('carrerraSpan')
const spanCarrera2 = document.getElementById('carrerraSpan2')
const materias_areas = document.getElementById('materias_areas')
const materias_areas_footer = document.getElementById('materias_areas_footer')
const areas_materias = document.getElementById('areas/materias')

const renderArquitectura = () => {
    modal.style.display = "none"
    sessionStorage.setItem('carrerra', "Arquitectura")
    spanCarrera.innerText = sessionStorage.getItem('carrerra')
    spanCarrera2.innerText = sessionStorage.getItem('carrerra')
    materias_areas.innerText = materias_areas_footer.innerText = "Materias"
    areas_materias.innerText = "Materias"
    consistency_testimonios()
    body.style.overflow = "scroll"
}

const renderMedicina = () => {
    modal.style.display = "none"
    sessionStorage.setItem('carrerra', "Medicina")
    spanCarrera.innerText = sessionStorage.getItem('carrerra')
    spanCarrera2.innerText = sessionStorage.getItem('carrerra')
    materias_areas.innerText = materias_areas_footer.innerText = "Áreas"
    areas_materias.innerText = "Áreas"

    body.style.overflow = "scroll"
    consistency_testimonios()

}




  