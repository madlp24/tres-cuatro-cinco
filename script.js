const reservationUrl = "https://menupp.co/trescuatrocinco/booking/venue/MrO2svW7FCkLsW7eEXes";
const menuUrl = "https://menupp.co/trescuatrocinco/venue/MrO2svW7FCkLsW7eEXes/menu/XbM1KCYgW78NaqKi90kr";

document.querySelectorAll("[data-reservation-link]").forEach((link) => {
  link.setAttribute("href", reservationUrl);
});

document.querySelectorAll("[data-menu-link]").forEach((link) => {
  if (menuUrl) {
    link.setAttribute("href", menuUrl);
    link.classList.remove("is-hidden");
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noreferrer");
  } else {
    link.classList.add("is-hidden");
  }
});

const brandLogo = document.querySelector("[data-brand-logo]");
const brandWordmark = document.querySelector("[data-brand-wordmark]");

if (brandLogo && brandWordmark) {
  brandLogo.addEventListener("load", () => {
    brandLogo.classList.remove("is-hidden");
    brandWordmark.classList.add("is-hidden");
  });

  brandLogo.addEventListener("error", () => {
    brandLogo.classList.add("is-hidden");
    brandWordmark.classList.remove("is-hidden");
  });
}

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

    feedback.textContent = `Gracias${name ? `, ${name}` : ""}. Por ahora este formulario no guarda datos todavia; el siguiente paso es conectarlo a Brevo para almacenar suscriptores reales.`;
    newsletterForm.reset();
  });
}
