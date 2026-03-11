const reservationUrl = "https://menupp.co/trescuatrocinco/booking/venue/MrO2svW7FCkLsW7eEXes";

document.querySelectorAll("[data-reservation-link]").forEach((link) => {
  link.setAttribute("href", reservationUrl);
});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#site-menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const newsletterForm = document.querySelector("#newsletter-form");
const feedback = document.querySelector("#form-feedback");

if (newsletterForm && feedback) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(newsletterForm);
    const name = formData.get("name");

    feedback.textContent = `Gracias${name ? `, ${name}` : ""}. Ya dejamos este formulario listo para conectarlo a tu herramienta de newsletter.`;
    newsletterForm.reset();
  });
}
