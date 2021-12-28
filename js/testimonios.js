const title_1 = document.getElementById('1-testimonio-title')
const title_2 = document.getElementById('2-testimonio-title')
const title_3 = document.getElementById('3-testimonio-title')
const title_4 = document.getElementById('4-testimonio-title')
const p_1 = document.getElementById('1-testimonio-p')
const p_2 = document.getElementById('2-testimonio-p')
const p_3 = document.getElementById('3-testimonio-p')
const p_4 = document.getElementById('4-testimonio-p')
const alumno_1 = document.getElementById('1-testimonio-alumno')
const alumno_2 = document.getElementById('2-testimonio-alumno')
const alumno_3 = document.getElementById('3-testimonio-alumno')
const alumno_4 = document.getElementById('4-testimonio-alumno')


const consistency_testimonios = () => {
    if(sessionStorage.getItem('carrerra') === 'Arquitectura'){
        p_1.innerText = `Geometría descriptiva para mi (y para muchos de mis compañeros) fue una materia muy compleja. Con esa materia pensaba que era imposible alcanzar el título de arquitecta. La cursé y dejé dos veces. En mi tercer y último intento conocí el curso de AM. Angi empezó a explicarme todo desde cero y lo que me parecía imposible, se tornó más que posible. 
        Con mucha dedicación, esfuerzo y la ayuda que obtuve, saqué un 9 en el segundo parcial posibilitandome promocionar la materia con 8,50.
        En todo momento que le escribí a Angi para sacarme dudas, fui muy bien atendida. Solo tengo que agradecer a Angi y su equipo por la didáctica impecable y la predisposición para ayudarme a sacar la materia.`
        alumno_1.innerText = 'Dandara Grima'
        alumno_2.innerText = 'Luz Barboza'
        alumno_3.innerText = 'Emilia Striglio'
        alumno_4.innerText = 'Dandara Grima'
    }else{
        alumno_1.innerText = 'Ezequiel Sosa'
        alumno_2.innerText = 'Melina Ravanedo'
        alumno_3.innerText = 'Nicolás Ullúa'
        alumno_4.innerText = 'Ezequiel Sosa'
    
    }
}

