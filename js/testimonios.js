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
        title_1.innerText = `"Lo que me parecía imposible, se tornó más que posible"`
        p_1.innerText = `Geometría descriptiva para mi (y para muchos de mis compañeros) fue una materia muy compleja. Con esa materia pensaba que era imposible alcanzar el título de arquitecta. La cursé y dejé dos veces. En mi tercer y último intento conocí el curso de AM. Angi empezó a explicarme todo desde cero y lo que me parecía imposible, se tornó más que posible. 
        Con mucha dedicación, esfuerzo y la ayuda que obtuve, saqué un 9 en el segundo parcial posibilitandome promocionar la materia con 8,50.
        En todo momento que le escribí a Angi para sacarme dudas, fui muy bien atendida. Solo tengo que agradecer a Angi y su equipo por la didáctica impecable y la predisposición para ayudarme a sacar la materia.`
        alumno_1.innerText = 'Dandara Grima'
        
        title_2.innerText =`"Me parece muy bueno poder ir debatiendo temas"`
        p_2.innerText = `Hice el curso intensivo a unas semanas de terminar el cursado.
        Aprobé los temas que nos faltaban dar y 
        los recuperatorios de lo que me había rendido mal. 
        Me parece muy bueno poder ir debatiendo e ir consultando dudas en las clases y
        también tener los videos para repasar dudas que fueron quedando. 
        ¡Es súper recomendable! 
        `
        alumno_2.innerText = 'Luz Barboza'
        
        title_3.innerText =`"La predisposición de enseñar se notaba en cada clase"`
        p_3.innerText = `A mitad de año, durante el cursado de Geometría Descriptiva,
        necesitaba preparar un parcial (uno de los más complicados para mi). 
        Busqué recomendaciones y comencé mis clases con AM. Desde el primer momento,
        Angi me brindó clases individuales. Particularmente, mi experiencia fue muy buena,
        el ambiente era cómodo y de confianza,
        no me sentía mal por preguntar todas las dudas que tenía.
        También me ayudó a entender ejercicios de trabajos prácticos para entregar y seguimos preparando parciales.
        La predisposición a la hora de enseñar se notaba en cada clase, junto a los apuntes hechos por ella y su facilidad para explicar cada uno de los temas. Destaco su organización ante tantos alumnos, porque siempre estuvo dispuesta. Las clases fueron una buena herramienta para poder promocionar la materia sin ningún problema y seguir avanzando en mi carrera.
        `
        alumno_3.innerText = 'Emilia Striglio'

        alumno_4.innerText = 'Dandara Grima'
    }else{
        title_1.innerText = `"Te enseñan a estudiar de forma eficiente"`
        p_1.innerText = `Antes de tener las clases con AM tuve otra particular. Lo dejé porque no explicaba absolutamente nada, era ir y que me dijeran las páginas que tenía que leer para la siguiente clase. En cambio, en AM no solo me explican todos los temas, sino que me motivan a leerlos por mi mismo y a hacer mis propios resúmenes. No solo se comprende los temas, también te enseñan a estudiar de forma eficiente. Gracias a mi esfuerzo y a estás clases aprobé mi primer año de Medicina.`
        alumno_1.innerText = 'Ezequiel Sosa'
        
        title_2.innerText = `"Me ayudaron a saber expresarme en los exámenes finales"`
        p_2.innerText = `Gracias a las clases de AM, aprendí a estudiar los temas de las áreas desde el razonamiento y la comprensión, leyendo de los libros y haciendo mis resúmenes. Además, me ayudaron a saber expresarme en los exámenes finales, por la modalidad dinámica de las clases, donde nos impulsaban a la participación.`
        alumno_2.innerText = 'Melina Ravanedo'
        
        title_3.innerText = `"Miguel se preocupa de que todos sus alumnos se apropien del tema"`
        p_3.innerText = `Siendo un ingresante en la carrera de medicina fue todo un desafío hacer frente a la amplia variedad de temas y conceptos a aprender. Necesitaba un acompañamiento pedagógico más allá de los seminarios y tutorías de la facultad. Entonces descubrí las clases de medicina de AM.
        Desde ese momento asistí al dictado de clases de todas las materias de primer y segundo año con ellos. Mi rendimiento y mi comprensión de los temas mejoró y no hubo ninguna materia que no aprobará siguiendo su orientación.
        Miguel se preocupa de que todos sus alumnos comprendan el tema y se apropien de él. Con ejemplos sencillos, originales y divertidos consigue captar la atención de los estudiantes y hacer llegar los conceptos claves a todos, para una construcción del conocimiento razonada y de complejidad creciente.
        `
        alumno_3.innerText = 'Nicolás Ullúa'

        alumno_4.innerText = 'Ezequiel Sosa'
    
    }
}

