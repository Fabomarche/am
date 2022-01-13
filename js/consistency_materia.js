const spanCarrera = document.getElementById('carreraSpan')
const spanCarrera2 = document.getElementById('carreraSpan2')
const materias_areas = document.getElementById('materias_areas')
const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer
const materias_areas_footer = document.getElementById('materias_areas_footer')


if(sessionStorage.getItem('carrera')){
    if(sessionStorage.getItem('carrera') === 'Medicina'){
        materias_areas.innerText = materias_areas_footer.innerText = "Áreas"
    }else{
        materias_areas.innerText = materias_areas_footer.innerText = "Materias"
    }
    spanCarrera.innerText = sessionStorage.getItem('carrera')
    spanCarrera2.innerText = sessionStorage.getItem('carrera')
    consistency_testimonios()
}

