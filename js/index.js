// Código que se ejecuta cuando la página carga completamente
window.onload = function () {
    // Referencias a elementos del DOM
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const startButton = document.getElementById("start");
    const media = document.getElementById("media");

    // Función para iniciar el reproductor
    const start = () => {
        media.addEventListener("load", function () {
            media.play(); // Reproduce automáticamente
            temps.innerHTML = media.duration; // Muestra duración
        });
    };

    // Llamar a función start
    start();

    // Función para reproducir
    const playMedia = () => {
        media.play();
    };

    // Función para pausar
    const pauseMedia = () => {
        media.pause();
    };

    // Función para ir al inicio
    const goToStart = () => {
        media.currentTime = 0;
    };

    // Event listeners para botones
    playButton.addEventListener("click", () => {
        playMedia();
    });

    pauseButton.addEventListener("click", () => {
        pauseMedia();
    });

    startButton.addEventListener("click", () => {
        goToStart();
    });
};