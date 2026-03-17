const reservationUrl = "https://menupp.co/trescuatrocinco/booking/venue/MrO2svW7FCkLsW7eEXes";
const menuUrl = "https://menupp.co/trescuatrocinco/venue/MrO2svW7FCkLsW7eEXes/menu/XbM1KCYgW78NaqKi90kr";
const socialUrls = {
  instagram: "",
  facebook: "",
};

for (const link of document.querySelectorAll("[data-reservation-link]")) {
  link.href = reservationUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
}

for (const link of document.querySelectorAll("[data-menu-link]")) {
  link.href = menuUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
}

for (const link of document.querySelectorAll("[data-social]")) {
  const key = link.getAttribute("data-social");
  const url = socialUrls[key];

  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.classList.remove("is-hidden");
  } else {
    link.classList.add("is-hidden");
  }
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
