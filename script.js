document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");

    });

    const form = document.querySelector(".contact-form");
    const submitButton = form.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Bloquea el envío predeterminado

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            showPopup("¡Tu mensaje ha sido enviado exitosamente!", true);
            form.reset(); // Limpia los campos después de mostrar el mensaje
        } else {
            showPopup("Por favor, completa todos los campos.", false);
        }
    });

    function showPopup(message, success) {
        const popup = document.createElement("div");
        popup.className = "popup-message";
        popup.textContent = message;

        // Color diferente según éxito o error
        popup.style.backgroundColor = success ? "#4CAF50" : "#D32F2F";

        document.body.appendChild(popup);

        // Mostrar PopUp con fade-in
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
