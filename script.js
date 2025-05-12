document.addEventListener("DOMContentLoaded", function () {
    // ==== MENÚ RESPONSIVE y POPUP (sin cambios) ====
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    const form = document.querySelector(".contact-form");

    if (form) {
        const submitButton = form.querySelector("button[type='submit']");

        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name && email && message) {
                showPopup("¡Tu mensaje ha sido enviado exitosamente!", true);
                form.reset();
            } else {
                showPopup("Por favor, completa todos los campos.", false);
            }
        });
    }

    function showPopup(message, success) {
        const popup = document.createElement("div");
        popup.className = "popup-message";
        popup.textContent = message;

        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = success ? "#4CAF50" : "#D32F2F";
        popup.style.color = "white";
        popup.style.padding = "12px 24px";
        popup.style.borderRadius = "5px";
        popup.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        popup.style.zIndex = "1000";
        popup.style.opacity = "0";
        popup.style.transition = "opacity 0.5s ease-in-out";

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.style.opacity = "1";
        }, 50);

        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => popup.remove(), 500);
        }, 2500);
    }

    // ==== INTRANET LOGIN y SESIÓN ====
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");
    const captchaText = document.getElementById("captcha") ? document.getElementById("captcha").textContent : null;

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const captchaInput = document.getElementById("captcha-input").value;

            if (username === "nuevo" && password === "TM_nuevo_2025" && captchaInput === captchaText) {
                localStorage.setItem("user", username);
                window.location.href = "intranet.html";
            } else {
                loginError.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
            }
        });
    }

    // Comprobar sesión en intranet.html
    const intranetContent = document.getElementById("intranet-content");
    if (intranetContent && !localStorage.getItem("user")) {
        window.location.href = "login.html";
    }

    // ==== MOSTRAR/OCULTAR CONTRASEÑA ====
    const passwordInput = document.getElementById("password");
    const togglePasswordButton = document.getElementById("toggle-password");

    if (togglePasswordButton && passwordInput) {
        togglePasswordButton.addEventListener("click", function () {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            this.textContent = type === "password" ? "\uD83D\uDC41" : "\uD83D\uDC41"; // Cambiar el icono (ojo abierto/cerrado)
        });
    }
});