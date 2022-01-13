const materias = document.getElementById('areas-materias')



if(sessionStorage.getItem('carrera') === 'Arquitectura'){
  materias.innerHTML = ` 
  <div class="papel_materias"><span>Materias</span></div>

        <div class="accordion col-9 col-md-10 col-lg-11 mt-5" id="accordionExample">

          <div
            class="accordion-item bg-transparent border-bottom-0 border-0 mt-5"
          >
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed bg-transparent"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Geometría Descriptiva
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Comenzaremos viendo las nociones básicas de Geometría para
                  poder entender con mayor facilidad las unidades siguientes.
                  Continuaremos con poliedros y superficies curvas, para
                  analizar su armado tridimensional en el programa AutoCAD.
                  Luego, avanzaremos con los cambios de planos, método que nos
                  servirá para encontrar las medidas reales de caras de los
                  objetos y, con ello, poder lograr los desarrollos laterales o
                  totales de un objeto. También veremos los diferentes tipos de
                  perspectivas, tanto cilíndricas como cónicas, y por último,
                  pero no menos importante, llegaremos a desarrollar la unidad
                  de sombras una de las más largas y lindas de la materia.
                </p>

                <ul class="list-unstyled">
                  <strong>Contenido:</strong>
                  <li class="mt-2">
                    Unidad 1: Vistas y axonometrías. Segmentos y planos.
                  </li>
                  <li class="mt-2">Unidad 2: Poliedros.</li>
                  <li class="mt-2">Unidad 3: Superficies curvas.</li>
                  <li class="mt-2">Unidad 4: Cambios de planos.</li>
                  <li class="mt-2">Unidad 5: Perspectivas.</li>
                  <li class="mt-2">Unidad 6: Sombras</li>
                </ul>
                <img
                  class="w-100"
                  src="../assets/img/materias-Arquitectura/Arquitectura_Geometría_Descriptiva.jpg"
                  alt="Geometría_Descriptiva"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent border-0 mt-1">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed bg-transparent"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Física
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Esta materia se ha convertido en uno de los miedos de los
                  estudiantes de primer año, pero tranqui que todo tiene
                  solución. Con nosotros vas a aprender a estudiar cada tema de
                  manera sencilla. Vamos a dividir a cada unidad en tres partes:
                  una parte de nociones básicas y otras dos partes de
                  aplicaciones a la arquitectura. Además como complemento
                  tendrás todas las fórmulas y ejercitaciones que iremos
                  haciendo en conjunto.
                </p>
                <ul class="list-unstyled">
                  <strong>Contenido:</strong>
                  <li class="mt-2">
                    Unidad 1: Introducción a la acústica arquitectónica
                  </li>
                  <li class="mt-2">
                    Unidad 2: Los fenómenos térmicos en la construcción
                  </li>
                  <li class="mt-2">
                    Unidad 3: La luz y la iluminación artificial.
                  </li>
                  <li class="mt-2">Unidad 4: Fluidos en la construcción.</li>
                  <li class="mt-2">
                    Unidad 5: La energía eléctrica en la vivienda.
                  </li>
                </ul>
                <img
                  class="w-100"
                  src="../assets/img/materias-Arquitectura/Arquitectura_Materia 2_Física.jpg"
                  alt="Física"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent border-0 mt-1">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed bg-transparent"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Matemáticas 1
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Matemáticas es una materia que se puede volver fácil (y hasta
                  divertida) cuando entendemos cómo se realizan los ejercicios.
                  Por eso nosotros te acompañamos en el entendimiento de la
                  materia, dividiendo a cada unidad en tres partes: la primera
                  con ejercicios básicos y sencillos, la segunda con ejercicios
                  medios y que requieren un poco más de esfuerzo y la tercera
                  para romperla y demostrar que ya sabes todo. Además como
                  complemento tendrás todas las fórmulas y ejercitaciones que
                  iremos haciendo en conjunto.
                </p>
                <ul class="list-unstyled">
                  <strong>Contenido:</strong>
                  <li class="mt-2">Unidad 1: Actividades introductorias.</li>
                  <li class="mt-2">Unidad 2: Razones trigonométricas.</li>
                  <li class="mt-2">Unidad 3: Vectores.</li>
                  <li class="mt-2">Unidad 4: Rectas.</li>
                </ul>
                <img
                  class="w-100"
                  src="../assets/img/materias-Arquitectura/Arquitectura_Materia3_Matemáticas1.jpg"
                  alt="Matemáticas1"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent border-0 mt-1 mb-5">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed bg-transparent"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Estática y resistencia
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Esta materia es la continuación y combinación de física y
                  matemáticas 1. Ahora sí, todo está aplicado a las estructuras.
                  Vamos a dividir el contenido de la materia en cuatro partes,
                  para ir desarrollando los temas pasito a pasito. De esa manera
                  no te vas a perder en el camino, vas a ir estudiando cada tema
                  de manera sencilla y entendiendo todo. Además como complemento
                  tendrás todas las fórmulas y ejercitaciones que iremos
                  haciendo en conjunto.
                </p>
                <img
                  class="w-100"
                  src="../assets/img/materias-Arquitectura/Arquitectura_Materia 4_ Estática_y_Resistencia.jpg"
                  alt="Estática_y_Resistencia"
                />
              </div>
            </div>
          </div>
        </div>
  `
}else{
  materias.innerHTML = ` 
  <div class="papel_materias"><span>Áreas</span></div>

  <div class="accordion col-9 col-md-10 col-lg-11 mt-5" id="accordionExample">
    <div
      class="accordion-item bg-transparent border-bottom-0 border-0 mt-5"
    >
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button collapsed bg-transparent"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Crecimiento y desarrollo
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            En esta área veremos las diferentes materias que abarca
            crecimiento y desarrollo, al mismo tiempo que aprenderás cómo
            estudiar, cómo organizarte en tus inicios en la universidad y
            cómo hacer tus propios resúmenes. En cada clase practicaremos
            cómo presentar los temas desarrollados, para ayudarte a perder
            el miedo a hablar en las mesas de examen o en las tutorías
          </p>

          <img
            class="w-100"
            src="../assets/img/areas-Medicina/Medicina _Area_1_Crecimiento_y_Desarrollo.jpg"
            alt="Crecimiento_y_Desarrollo"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item bg-transparent border-0 mt-1">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed bg-transparent title_area"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Nutrición
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            Nos enfocaremos en estudiar el aparato digestivo desde las
            diferentes materias que comprenden el área de nutrición:
            Anatomía, Histología, Embriología, Fisiología, etc. También
            aprenderás las diferencias que tiene el aparato digestivo
            entre el lactante, el adulto y el adulto mayor. Posteriormente
            veremos los temas que necesitas entender y aprender, no solo
            para el desarrollo y presentación de cada unidad en la mesa de
            examen y tutorías, sino también para los próximos años de la
            carrera
          </p>

          <img
            class="w-100"
            src="../assets/img/areas-Medicina/Medicina_Area_2_Nutrición.jpg"
            alt="Nutrición"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item bg-transparent border-0 mt-1">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed bg-transparent title_area"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Sexualidad, género y reproducción
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            En esta área te enseñaremos como tema principal la
            conformación y el funcionamiento del aparato reproductor del
            varón y de la mujer desde las diferentes materias que
            comprenden el área de sexualidad, género y reproducción, como
            lo son: Anatomía, Histología, Embriología, Fisiología, etc. De
            igual forma también veremos los diferentes temas que necesitan
            tanto para el desarrollo de las unidades problema en la mesa
            de examen y tutorías, como también para áreas y materias
            futuras.
          </p>

          <img
            class="w-100"
            src="../assets/img/areas-Medicina/Medicina_Area_3_Sexualidad_genero_y_reproduccion.jpg"
            alt="genero_y_reproduccion"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item bg-transparent border-0 mt-1">
      <h2 class="accordion-header" id="headingFour">
        <button
          class="accordion-button collapsed bg-transparent title_area"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          Trabajo y tiempo libre
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <ul class="list-unstyled">
            <span
              >El desarrollo de esta área está dividido en 5
              módulos:</span
            >
            <li class="mt-2">Módulo 1: Sistema nervioso</li>
            <li class="mt-2">Módulo 2: Aparato cardiovascular</li>
            <li class="mt-2">Módulo 3: Aparato respiratorio</li>
            <li class="mt-2">Módulo 4: Sistema muscular</li>
            <li class="mt-2">Módulo 5: Metabolismo</li>
          </ul>
          <p>
            Veremos una integración de los sistemas anteriormente
            mencionados en estado de reposo y los cambios que ellos tienen
            durante el ejercicio. Además, en el desarrollo de cada unidad
            problema iremos agregando los temas necesarios para
            integrarlas de manera completa y, de esa manera, poder
            resolverlas. Al igual que en los cursos anteriores, luego de
            estudiar cada uno de los módulos, veremos cómo presentarlos
            tanto para las mesas de examen como para las tutorías
          </p>
          <img
          class="w-100"
            src="../assets/img/areas-Medicina/Medicina_Area_4_Trabajo_y_tiempo_libre.jpg"
            alt="Trabajo_y_tiempo_libre"
          />
        </div>
      </div>
    </div>
    <div class="accordion-item bg-transparent border-0 mt-1 mb-5">
      <h2 class="accordion-header" id="headingFive">
        <button
          class="accordion-button collapsed bg-transparent title_area"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          El ser humano y su medio
        </button>
      </h2>
      <div
        id="collapseFive"
        class="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>
            En esta área estudiaremos nuestro medio interno, el aparato
            urinario y la relación del ser humano con el entorno desde un
            punto de vista biológico y social. Al finalizar veremos la
            relación de cada uno de los temas con las unidades problema y
            cómo presentarlo en los múltiples escenarios que se pueden dar
            en las mesas de examen.
          </p>
          <img
          class="w-100"
            src="../assets/img/areas-Medicina/Medicina_Area_5_El ser humano_y_su_medio.jpg"
            alt="El_ser_humano_y_su_medio"
          />
        </div>
      </div>
    </div>
  </div>
  `
}

