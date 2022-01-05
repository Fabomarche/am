const cursos = document.getElementById('cursos');


if(sessionStorage.getItem('carrerra') === 'Arquitectura'){
  cursos.innerHTML = ` 
  <div id="papel-recursos" class="naranja"><span>Cursos</span></div>

        <div class="accordion col-9 col-lg-11 mt-5 ms-5" id="accordionExample">
          <div
            class="accordion-item bg-transparent border-bottom-0 border-0 mt-5"
          >
            <h2 class="accordion-header" id="headingOne">

              <button
                class="accordion-button accordion-button_cursos collapsed bg-transparent title_area"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Creación de esquemas arquitectónicos
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
                  El objetivo de éste curso es que puedas a crear de cero
                  diversas ilustraciones que te sirvan como esquemas
                  arquitectónicos para explicar el proceso de creación del
                  proyecto.
                </p>
                <ul class="list-unstyled">
                  <strong>Contenido:</strong>
                  <li class="mt-2">
                    Módulo 1: Introducción a los diferentes estilos de
                    ilustración.
                  </li>
                  <li class="mt-2">
                    Módulo 2: Prueba y error hasta la frustración.
                  </li>
                  <li class="mt-2">Módulo 3: Modelado en 3d.</li>
                  <li class="mt-2">Módulo 4: Sacando brillo en Photoshop.</li>
                  <li class="mt-2">Módulo 5: Producción de contenido final.</li>
                </ul>
                <p>
                  Es ideal para arquitectos, estudiantes de arquitectura, diseño
                  de interiores, diseño industrial y en general a todos los
                  entusiastas de la creación gráfica digital que deseen ampliar
                  sus conocimientos, conocer las técnicas y el procedimiento que
                  hay detrás de la elaboración de éstas piezas gráficas. Como
                  requisitos necesitarás lápiz, papel, un ordenador con Adobe
                  Photoshop y algún programa de modelado 3d.
                </p>
                <img
                  class="img-fluid"
                  src="../assets/img/cursos-Arquitectura/Arquitectura_Curso1_ Creación_de_esquemas_arquitectónicos.jpg"
                  alt="Creación de esquemas arquitectónicos"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent border-0 mt-1">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button accordion-button_cursos collapsed bg-transparent title_area"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collage Arquitectónico
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
                  El objetivo de éste curso es que puedas crear hermosas
                  ilustraciones con herramientas muy poderosas como lo son
                  AutoCAD o Adobe Illustrator y el grandísimo Photoshop
                </p>
                <ul class="list-unstyled">
                  <strong>Contenido:</strong>
                  <li class="mt-2">
                    Módulo 1: Introducción a los diferentes estilos de collage
                  </li>
                  <li class="mt-2">
                    Módulo 2: Prueba y error hasta la frustración.
                  </li>
                  <li class="mt-2">Módulo 3: Líneas del bien.</li>
                  <li class="mt-2">Módulo 4: Sacando brillo en Photoshop.</li>
                  <li class="mt-2">Módulo 5: Producción de contenido final.</li>
                </ul>
                <p>
                  Es ideal para arquitectos, estudiantes de arquitectura, diseño
                  de interiores, diseño industrial y en general a todos los
                  entusiastas de la creación gráfica digital que deseen ampliar
                  sus conocimientos, conocer las técnicas y el procedimiento que
                  hay detrás de la elaboración de éstas hermosas piezas
                  gráficas. Como requisitos necesitarás lápiz, papel, un
                  ordenador con Adobe Photoshop y algún programa para el manejo
                  de líneas como pueden ser Adobe Illustrator o AutoCAD.
                </p>
                <img
                  class="img-fluid"
                  src="../assets/img/cursos-Arquitectura/Arquitectura _Curso_2 _Collage_Arquitectónico.jpg"
                  alt="Collage Arquitectónico"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent border-0 mt-1 mb-5">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button accordion-button_cursos collapsed bg-transparent title_area"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Photoshop
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
                  El objetivo de éste curso es que puedas introducirte en el
                  mundo de éste increíble programa, aprendiendo el uso de las
                  herramientas fundamentales para ilustraciones y fotografías
                </p>
                <ul class="list-unstyled">
                  <strong>Contenido:</strong>
                  <li class="mt-2">
                    Módulo 1: Introducción y organización en el programa.
                  </li>
                  <li class="mt-2">
                    Módulo 2: Capas, máscaras y diferentes correcciones de
                    colores.
                  </li>
                  <li class="mt-2">Módulo 3: Usos de pinceles.</li>
                  <li class="mt-2">
                    Módulo 4: Retoques, recortes y correcciones de imágen.
                  </li>
                </ul>
                <p>
                  Es ideal para arquitectos, estudiantes de arquitectura, diseño
                  de interiores, diseño industrial y en general a todos los
                  entusiastas de la creación gráfica digital que deseen aprender
                  ésta herramienta con maravillosos resultados. Como requisitos
                  necesitarás un ordenador con Adobe Photoshop.
                </p>
                <img
                  class="img-fluid"
                  src="../assets/img/cursos-Arquitectura/Arquitectura_Curso_3_Photoshop.jpg"
                  alt="Photoshop"
                />
              </div>
            </div>
          </div>
        </div>
  `
}else{
  cursos.innerHTML = ` 
  <div id="papel-recursos" class="naranja"><span>Cursos</span></div>

        <div class="accordion col-9 col-lg-11 ms-5 mt-5" id="accordionExample">
          <div
            class="accordion-item bg-transparent border-bottom-0 border-0 mt-5"
          >
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button accordion-button_cursos collapsed bg-transparent title_area"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Neuroanatomía
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
                  En este curso aprenderás y entenderás cada uno de los
                  componentes anatómicos del sistema nervioso a través del
                  material propio (imágenes, dibujos y esquemas) y en 3D que
                  hará mucho más fácil el entendimiento de cada tema. El
                  contenido del curso está dividido en tres módulos anatómicos,
                  dos fisiológicos y uno histológico, donde veremos:
                </p>
                <ul class="list-unstyled">
                  <li class="mt-2"><strong>Módulo anatomía 1:</strong> Osteología del neurocráneo, anatomía del sistema nervioso central, vías de conducción nerviosa y pares craneales.</li>
                  <li class="mt-2"><strong>Módulo anatomía 2:</strong> Sistema nervioso periférico (haciendo hincapié en los plexos que inervan al miembro superior e inferior).</li>
                  <li class="mt-2"><strong>Módulo anatomía 3:</strong> Inervación del corazón, del aparato reproductor del varón y de la mujer y del aparato cardiovascular. Además profundizaremos sobre las vías motoras, propioceptivas y sensoriales, sistema nervioso autónomo y aparato vestibular.</li>
                  <li class="mt-2"><strong>Módulo fisiología 1:</strong> Composición de la membrana celular, transporte a través de la membrana, sinapsis y potencial de membrana en reposos y de acción.</li>
                  <li class="mt-2"><strong>Módulo fisiología 2:</strong> Receptores sensitivos, funciones motoras del SNC, reflejos medulares, regulación del movimiento, de la postura y del equilibrio.</li>
                  <li class="mt-2"><strong>Módulo histología:</strong> Embriología primeras semanas, embriología del sistema nervioso y tejido nervioso.
                  </li>
                  </ul>
                  <p>Al finalizar cada tema, contarán con material de estudio y diferentes actividades que serán revisadas durante cada clase. 
                    Este curso está orientado a estudiantes de medicina de primer y segundo año. No requiere tener conocimientos previos.
                    </p>
                <img
                class="img-fluid"
                  src="../assets/img/cursos-Medicina/Medicina_Curso1_Neuroanatomía.jpg"
                  alt="Curso1-Neuroanatomía"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent border-0 mt-1">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button accordion-button_cursos collapsed bg-transparent title_area"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
              Anatomía de miembro superior e inferior
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
                  En este curso veremos la osteología, la miología y las articulaciones del miembro superior e inferior, además de una introducción al aparato cardiovascular y nervioso para luego estudiar la irrigación e inervación de los mismos.
                  Este curso está orientado a estudiantes de medicina de primer año. No requiere tener conocimientos previos.

                </p>
                <img
                   class="img-fluid"
                   src="../assets/img/cursos-Medicina/Medicina_Curso2_Anatomía_de_miembro_superior_e _inferior.jpg"
                  alt="Anatomía de miembro superior e inferior"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item bg-transparent border-0 mt-1 mb-5">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button accordion-button_cursos collapsed bg-transparent title_area"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
              Embriología
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
                  En este curso aprenderás desde la gametogénesis hasta la formación embriología de los diferentes sistemas del cuerpo humano.
                </p>
                <ul class="list-unstyled">
                  <li class="mt-2"><strong>Módulo 1:</strong> Introducción, gametogénesis, ciclo ovárico y ciclo sexual femenino.</li>
                  <li class="mt-2"><strong>Módulo 2:</strong> Fecundación, primeras semanas de desarrollo embrionario, sistema nervioso y aparato digestivo.</li>
                  <li class="mt-2"><strong>Módulo 3:</strong> Aparato reproductor y urinario, aparato cardiovascular y aparato respiratorio.</li>
                  </li>
                  </ul>
                  <p>Este curso está orientado a estudiantes de medicina de primer y segundo año. No requiere tener conocimientos previos.</p>
                <img
                class="img-fluid"
                   src="../assets/img/cursos-Medicina/Medicina_Curso3_Embriología.jpg"
                  alt="Embriología"
                />
              </div>
            </div>
          </div>
          
        </div>
  `
}
