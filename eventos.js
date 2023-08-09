document.addEventListener("DOMContentLoaded", function () {
    const divBoton = document.getElementById("divBoton");
    const saludarBtn = document.getElementById("saludarBtn");

    divBoton.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    saludarBtn.addEventListener("click", function (event) {
        alert("Hola!");
        event.stopPropagation();
    });
});
