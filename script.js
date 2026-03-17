const reservationUrl = "https://menupp.co/trescuatrocinco/booking/venue/MrO2svW7FCkLsW7eEXes";
const menuUrl = "https://menupp.co/trescuatrocinco/venue/MrO2svW7FCkLsW7eEXes/menu/XbM1KCYgW78NaqKi90kr";
const socialUrls = {
  instagram: "https://www.instagram.com/trescuatrocincobta/",
  facebook: "https://www.facebook.com/trescuatrocincoBta/?locale=es_LA",
  tiktok: "https://www.tiktok.com/@trescuatrocincobta",
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

// Menú móvil
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Carrusel
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".carousel-dot");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

if (slides.length) {
  let current = 0;
  let timer;

  function carouselGoTo(index) {
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");
  }

  function carouselStart() {
    timer = setInterval(() => carouselGoTo(current + 1), 4500);
  }

  function carouselReset() {
    clearInterval(timer);
    carouselStart();
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { carouselGoTo(current - 1); carouselReset(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { carouselGoTo(current + 1); carouselReset(); });
  dots.forEach((dot, i) => dot.addEventListener("click", () => { carouselGoTo(i); carouselReset(); }));

  carouselStart();
}

// ── Traducciones ──────────────────────────────────────────────────────────────
const translations = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.gallery": "Galería",
    "nav.menu": "Menú",
    "nav.contact": "Contacto",
    "nav.reserve": "Reservar",
    "mobile.menu": "Menú",
    // Hero (inicio)
    "hero.kicker": "Steakhouse de alta cocina",
    "hero.title": "Fuego, producto y una mesa que se recuerda.",
    "hero.desc": "Una experiencia gastronómica que honra el fuego y el producto. En Chapinero, Bogotá.",
    "hero.cta.reserve": "Reservar",
    "hero.cta.menu": "Ver menú",
    // La casa
    "lacasa.label": "La casa",
    "lacasa.title": "Cortes excepcionales. Fuego que no miente.",
    "lacasa.desc": "Tres Cuatro Cinco nació del respeto por el producto. Cada corte llega seleccionado, cada brasa tiene su tiempo y cada mesa merece una experiencia que valga la pena recordar. Estamos en Chapinero, Bogotá.",
    "lacasa.cta.reserve": "Reservar mesa",
    "lacasa.cta.menu": "Ver menú",
    // Horarios
    "hours.label": "Horarios",
    "hours.mon": "Lunes",
    "hours.mon.val": "Cerrado",
    "hours.tue": "Martes",
    "hours.wed-sat": "Miércoles — Sábado",
    "hours.sun": "Domingo",
    // Reservaciones
    "reservations.label": "Reservaciones",
    "reservations.desc": "Los fines de semana se llenan rápido. Recomendamos reservar con al menos 48 horas de anticipación.",
    "reservations.cta": "Reservar mesa",
    "reservations.contact": "Contacto",
    // Newsletter
    "newsletter.kicker": "Newsletter",
    "newsletter.title": "Menú de temporada, eventos y novedades.",
    "newsletter.desc": "Entérate primero de nuevos platos, cartas de temporada y eventos especiales en Tres Cuatro Cinco.",
    "newsletter.placeholder": "Tu correo electrónico",
    "newsletter.cta": "Suscribirme",
    // Footer compartido
    "footer.brand.desc": "Steakhouse de alta cocina en Bogotá. Menú en línea, reservas activas y acceso rápido a la ubicación.",
    "footer.accesos": "Accesos",
    "footer.menu": "Ver menú",
    "footer.location": "Ubicación y mapa",
    "footer.reserve": "Ir a reservas",
    // Footer contacto
    "footer.menu.label": "Menú",
    "footer.menu.link": "Ir al menú",
    "footer.home": "Inicio",
    "footer.home.link": "Volver al inicio",
    // Galería
    "gallery.kicker": "Galería",
    "gallery.title": "El producto habla por sí solo.",
    "gallery.desc": "Una selección de imágenes que captura el fuego, el corte y la experiencia de Tres Cuatro Cinco.",
    // Eventos
    "events.kicker": "Eventos privados",
    "events.title": "Tu celebración merece el escenario correcto.",
    "events.desc": "Cumpleaños, aniversarios, reuniones corporativas o cenas de gala. Tres Cuatro Cinco abre sus puertas para eventos privados con menú personalizado y atención exclusiva.",
    "events.cta.availability": "Consultar disponibilidad",
    "events.cta.contact": "Escribirnos",
    "events.includes": "¿Qué incluye?",
    "events.item1": "Salón privado hasta 40 personas",
    "events.item2": "Menú personalizado y maridaje de vinos",
    "events.item3": "Decoración y ambientación a medida",
    "events.item4": "Coordinación completa del evento",
    "events.item5": "Servicio de mesa dedicado",
    // Contacto
    "contact.kicker": "Contacto y ubicación",
    "contact.title": "Cómo llegar, reservar y contactarnos.",
    "contact.desc": "Todo lo práctico del restaurante en una sola página, sin rodeos.",
    "contact.cta.reserve": "Reservar",
    "contact.cta.menu": "Ver menú",
    "contact.address.label": "Dirección",
    "contact.address.maps": "Abrir en Google Maps",
    "contact.reservations.label": "Reservas y contacto",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.menu": "Menu",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve",
    "mobile.menu": "Menu",
    // Hero (home)
    "hero.kicker": "Fine dining steakhouse",
    "hero.title": "Fire, craft and a table to remember.",
    "hero.desc": "A gastronomic experience that honors fire and the finest cuts. In Chapinero, Bogotá.",
    "hero.cta.reserve": "Reserve",
    "hero.cta.menu": "See menu",
    // The house
    "lacasa.label": "The house",
    "lacasa.title": "Exceptional cuts. Fire that doesn't lie.",
    "lacasa.desc": "Tres Cuatro Cinco was born out of respect for the product. Every cut is carefully selected, every ember has its moment, and every table deserves an experience worth remembering. We are in Chapinero, Bogotá.",
    "lacasa.cta.reserve": "Reserve a table",
    "lacasa.cta.menu": "See menu",
    // Hours
    "hours.label": "Hours",
    "hours.mon": "Monday",
    "hours.mon.val": "Closed",
    "hours.tue": "Tuesday",
    "hours.wed-sat": "Wednesday — Saturday",
    "hours.sun": "Sunday",
    // Reservations
    "reservations.label": "Reservations",
    "reservations.desc": "Weekends fill up fast. We recommend booking at least 48 hours in advance.",
    "reservations.cta": "Reserve a table",
    "reservations.contact": "Contact",
    // Newsletter
    "newsletter.kicker": "Newsletter",
    "newsletter.title": "Seasonal menu, events and news.",
    "newsletter.desc": "Be the first to know about new dishes, seasonal menus and special events at Tres Cuatro Cinco.",
    "newsletter.placeholder": "Your email address",
    "newsletter.cta": "Subscribe",
    // Shared footer
    "footer.brand.desc": "Fine dining steakhouse in Bogotá. Online menu, active reservations and quick access to our location.",
    "footer.accesos": "Quick links",
    "footer.menu": "See menu",
    "footer.location": "Location & map",
    "footer.reserve": "Go to reservations",
    // Contact footer
    "footer.menu.label": "Menu",
    "footer.menu.link": "Go to menu",
    "footer.home": "Home",
    "footer.home.link": "Back to home",
    // Gallery
    "gallery.kicker": "Gallery",
    "gallery.title": "The product speaks for itself.",
    "gallery.desc": "A curated selection of images capturing the fire, the cut and the Tres Cuatro Cinco experience.",
    // Events
    "events.kicker": "Private events",
    "events.title": "Your celebration deserves the right setting.",
    "events.desc": "Birthdays, anniversaries, corporate gatherings or gala dinners. Tres Cuatro Cinco opens its doors for private events with personalized menus and exclusive service.",
    "events.cta.availability": "Check availability",
    "events.cta.contact": "Write to us",
    "events.includes": "What's included?",
    "events.item1": "Private venue up to 40 guests",
    "events.item2": "Custom menu and wine pairing",
    "events.item3": "Tailored decoration and ambiance",
    "events.item4": "Full event coordination",
    "events.item5": "Dedicated table service",
    // Contact
    "contact.kicker": "Contact & location",
    "contact.title": "How to get here, reserve and contact us.",
    "contact.desc": "Everything practical about the restaurant on one page, no fuss.",
    "contact.cta.reserve": "Reserve",
    "contact.cta.menu": "See menu",
    "contact.address.label": "Address",
    "contact.address.maps": "Open in Google Maps",
    "contact.reservations.label": "Reservations & contact",
  }
};

function applyTranslations(lang) {
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.innerHTML = lang === "es"
    ? '<span class="fi fi-us"></span> EN'
    : '<span class="fi fi-es"></span> ES';

  document.documentElement.lang = lang === "es" ? "es" : "en";
  localStorage.setItem("tcc-lang", lang);
}

// Idioma guardado o español por defecto
let currentLang = localStorage.getItem("tcc-lang") || "es";

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyTranslations(currentLang);
  });

  // Aplicar idioma al cargar la página
  applyTranslations(currentLang);
}
