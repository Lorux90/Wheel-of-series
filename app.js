window.addEventListener('DOMContentLoaded', (event) => {
    alert("sono pronto");
    system_setup();
});

function system_setup(){
    const ilbottone = document.getElementById("start-me-up");
    ilbottone.addEventListener('click', (event) => {
        alert("funziona");
       start_application();
    });
}

function start_application(){
    const intro = document.getElementById("intro");
    intro.className += " d-none";

    const main_screen = document.getElementById("random_serie");
    main_screen.className= series_card.className.replace( " d-none","");
}