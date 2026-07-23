// ===============================
// BOTÓN DE USUARIO GLOBAL
// ===============================

const userButton = document.getElementById("userButton");

if (userButton) {

    const usuario = JSON.parse(localStorage.getItem("usuarioYouthWork"));
    const sesion = localStorage.getItem("sesionActiva");

    if (usuario && sesion) {

        userButton.href = "perfil.html";

        userButton.innerHTML = `
            <i class="fa-solid fa-user"></i>
            <span>${usuario.nombre}</span>
        `;

    } else {

        userButton.href = "login.html";

        userButton.innerHTML = `
            <i class="fa-solid fa-user"></i>
            <span>Iniciar sesión</span>
        `;

    }

}