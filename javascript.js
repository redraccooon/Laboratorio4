// Espera a que cargue todo el contenido
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos los botones
    const boton1 = document.querySelector(".button1");
    const boton2 = document.querySelector(".button2");
    const boton3 = document.querySelector(".button3");

    // Evento para el primer botón
    boton1.addEventListener("click", function () {
        document.body.style.backgroundColor = "wheat";
    });

    // Evento para el segundo botón
    boton2.addEventListener("click", function () {
        document.body.style.backgroundColor = "salmon";
    });

    // Evento para el tercer botón
    boton3.addEventListener("click", function () {
        document.body.style.backgroundColor = "mediumaquamarine";
    });

});