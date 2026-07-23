// ===============================
// VERIFICAR SESIÓN
// ===============================

const usuario = JSON.parse(localStorage.getItem("usuarioYouthWork"));

const sesion = localStorage.getItem("sesionActiva");

if(!usuario || !sesion){

    window.location.href="login.html";

}

// ===============================
// MOSTRAR NOMBRE
// ===============================

document.getElementById("welcomeUser").innerHTML=

`👋 Bienvenido, ${usuario.nombre}`;

// ===============================
// CERRAR SESIÓN
// ===============================

document
.getElementById("logout")
.addEventListener("click",()=>{

localStorage.removeItem("sesionActiva");

window.location.href="index.html";

});