document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío del formulario al servidor

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            showPopup("¡Tu mensaje ha sido enviado exitosamente!");
            form.reset(); // Limpia el formulario
        } else {
            showPopup("Por favor, completa todos los campos.");
        }
    });

    function showPopup(message) {
        const popup = document.createElement("div");
        popup.className = "popup-message";
        popup.textContent = message;
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => popup.remove(), 500);
        }, 2000);
    }
});
