const reservationUrl = "https://menupp.co/trescuatrocinco/booking/venue/MrO2svW7FCkLsW7eEXes";
const menuUrl = "";

document.querySelectorAll("[data-reservation-link]").forEach((link) => {
  link.setAttribute("href", reservationUrl);
});

document.querySelectorAll("[data-menu-link]").forEach((link) => {
  if (menuUrl) {
    link.setAttribute("href", menuUrl);
    link.classList.remove("is-hidden");
  } else {
    link.classList.add("is-hidden");
  }
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

    feedback.textContent = `Gracias${name ? `, ${name}` : ""}. Por ahora este formulario no guarda datos todavia; falta conectarlo al servicio de newsletter que elijas.`;
    newsletterForm.reset();
  });
}
