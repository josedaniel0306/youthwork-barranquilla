// ===============================
// REGISTRO
// ===============================

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const strength = document.getElementById("passwordStrength");

if (password && togglePassword) {

    // Mostrar / Ocultar contraseña

    togglePassword.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            password.type = "password";
            togglePassword.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

    // Seguridad de la contraseña

    if (strength) {

        password.addEventListener("input", () => {

            const value = password.value;

            if (value.length < 6) {

                strength.textContent = "🔴 Contraseña débil";
                strength.style.color = "#EF4444";

            } else if (value.length < 10) {

                strength.textContent = "🟡 Contraseña media";
                strength.style.color = "#F59E0B";

            } else {

                strength.textContent = "🟢 Contraseña fuerte";
                strength.style.color = "#10B981";

            }

        });

    }

}

const form = document.getElementById("registerForm");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const usuario = {

            nombre: document.getElementById("nombre").value,

            apellido: document.getElementById("apellido").value,

            correo: document.getElementById("correo").value,

            password: document.getElementById("password").value

        };

        const confirmar = document.getElementById("confirmPassword").value;

        if (usuario.password !== confirmar) {

            alert("Las contraseñas no coinciden.");

            return;

        }

        localStorage.setItem("usuarioYouthWork", JSON.stringify(usuario));

        alert("🎉 ¡Cuenta creada correctamente!");

        window.location.href = "login.html";

    });

}

// ===============================
// LOGIN
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    const loginPassword = document.getElementById("loginPassword");
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");

    toggleLoginPassword.addEventListener("click", () => {

        if (loginPassword.type === "password") {

            loginPassword.type = "text";
            toggleLoginPassword.classList.replace("fa-eye", "fa-eye-slash");

        } else {

            loginPassword.type = "password";
            toggleLoginPassword.classList.replace("fa-eye-slash", "fa-eye");

        }

    });

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const correo = document.getElementById("loginCorreo").value;
        const password = document.getElementById("loginPassword").value;

        const usuario = JSON.parse(localStorage.getItem("usuarioYouthWork"));

        if (!usuario) {

            alert("No existe ninguna cuenta registrada.");

            return;

        }

        if (correo === usuario.correo && password === usuario.password) {

            localStorage.setItem("sesionActiva", "true");

            alert(`¡Bienvenido, ${usuario.nombre}!`);

            window.location.href = "perfil.html";

        } else {

            alert("Correo o contraseña incorrectos.");

        }

    });

}