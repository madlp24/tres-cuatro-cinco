const reservationUrl = "https://menupp.co/trescuatrocinco/booking/venue/MrO2svW7FCkLsW7eEXes";
const menuUrl = "https://menupp.co/trescuatrocinco/venue/MrO2svW7FCkLsW7eEXes/menu/XbM1KCYgW78NaqKi90kr";

for (const link of document.querySelectorAll("[data-reservation-link]")) {
  link.href = reservationUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
}

for (const link of document.querySelectorAll("[data-menu-link]")) {
  link.href = menuUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.classList.remove("is-hidden");
}

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
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
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

    feedback.textContent = `Gracias${name ? `, ${name}` : ""}. Esta parte quedara conectada a Brevo en el siguiente paso.`;
    newsletterForm.reset();
  });
}
