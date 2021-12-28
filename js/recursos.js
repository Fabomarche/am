const recursos = document.getElementById('render-recursos')

if(sessionStorage.getItem('carrerra') === 'Arquitectura'){
    recursos.innerHTML = ` 
    <a href="https://drive.google.com/drive/folders/1r6jlW4lYyIhrnIM9Ly-sbRQkLqUP4BuO?usp=sharing" target="_blank">
        <img src="../assets/img/Libros.png" alt="">
        <h5 class="text-center fs-4 mt-2">Libros</h5>
    </a>
    <a href="https://drive.google.com/drive/folders/1-l0Nj4BEvSvb1ieQ1HmZxjA9urgXSDep?usp=sharing" target="_blank">
        <img src="../assets/img/Arquitectura - Fórmulas.png" alt="">
        <h5 class="text-center fs-4 mt-2">Fórmulas</h5>
    </a>
    <a href="https://drive.google.com/drive/folders/1DStmPJ3qUA6FBprpPvRoghKWQgePe1Hc?usp=sharing" target="_blank">
        <img src="../assets/img/Apuntes.png" alt="">
        <h5 class="text-center fs-4 mt-2">Apuntes</h5>
    </a>
    `
}else{
    recursos.innerHTML = ` 
    <a href="https://drive.google.com/drive/folders/18l-Y3aic3h2ydGT6tsp4hbgxFoEG_x8T?usp=sharing" target="_blank">
        <img src="../assets/img/Libros.png" alt="">
        <h5 class="text-center fs-4 mt-2">Libros</h5>
    </a>
    <a href="https://drive.google.com/drive/folders/14dnyq2C7xKQUjdLhc-tQwZ2rLskCO8U7?usp=sharing" target="_blank">
        <img src="../assets/img/Medicina - Bibliografía.png" alt="">
        <h5 class="text-center fs-4 mt-2">Bibliografía</h5>
    </a>
    <a href="https://drive.google.com/drive/folders/1EbWKo_aSuIkH3f1FEW8ir0FkYXAW9DbC?usp=sharing" target="_blank">
        <img src="../assets/img/Apuntes.png" alt="">
        <h5 class="text-center fs-4 mt-2">Apuntes</h5>
    </a>
    `
}