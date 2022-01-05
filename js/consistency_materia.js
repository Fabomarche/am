const spanCarrera = document.getElementById('carrerraSpan')
const spanCarrera2 = document.getElementById('carrerraSpan2')
const materias_areas = document.getElementById('materias_areas')
const btnCambiarCarrera = document.getElementById('btnCambiarCarrera')//footer
const materias_areas_footer = document.getElementById('materias_areas_footer')

if(sessionStorage.getItem('carrerra')){
    if(sessionStorage.getItem('carrerra') === 'Medicina'){
        materias_areas.innerText = materias_areas_footer.innerText = "Áreas"
    }else{
        materias_areas.innerText = materias_areas_footer.innerText = "Materias"
    }
    spanCarrera.innerText = sessionStorage.getItem('carrerra')
    spanCarrera2.innerText = sessionStorage.getItem('carrerra')
    consistency_testimonios()
}

