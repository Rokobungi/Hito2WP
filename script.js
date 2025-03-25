document.addEventListener("DOMContentLoaded", function () {
    // ==== MENÚ RESPONSIVE ====
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    // ==== FORMULARIO DE CONTACTO ====
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

    // ==== POPUP DE MENSAJE ====
    function showPopup(message, success) {
        const popup = document.createElement("div");
        popup.className = "popup-message";
        popup.textContent = message;

        // Estilos iniciales del PopUp
        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.backgroundColor = success ? "#4CAF50" : "#D32F2F"; // Verde si éxito, rojo si error
        popup.style.color = "white";
        popup.style.padding = "12px 24px";
        popup.style.borderRadius = "5px";
        popup.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        popup.style.zIndex = "1000";
        popup.style.opacity = "0"; // Inicialmente invisible
        popup.style.transition = "opacity 0.5s ease-in-out";

        document.body.appendChild(popup);

        // Mostrar con fade-in
        setTimeout(() => {
            popup.style.opacity = "1";
        }, 50);

        // Desaparece después de 2.5s
        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => popup.remove(), 500);
        }, 2500);
    }
});
