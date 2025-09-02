// Select DOM elements
const body = document.body;
const modeToggle = document.getElementById("mode-toggle");
const langSwitch = document.getElementById("lang-switch");
const logoImg = document.querySelector(".logo img");

// Translations for English and Arabic
const translations = {
  en: {
    hero: "Hi, I’m <span>Ranim Kouidri</span><br> but you can just call me <span>Ranim</span>.",
    projects: "See my projects",
    about: "Who I Am",
    contact: "Let’s Talk"
  },
  ar: {
    hero: "مرحبًا، أنا <span>قويدري رنيم</span><br> ولكن يمكنك مناداتي فقط <span>رنيم</span>.",
    projects: "شاهد مشاريعي",
    about: "من أنا",
    contact: "لنتحدث"
  }
};

// Load saved language or default to English
let currentLang = localStorage.getItem("lang") || "en";

// -----------------------------------
// Dark / Light Mode Toggle Function
// -----------------------------------
function toggleDarkMode() {
  const isDark = body.classList.toggle("dark");
  modeToggle.classList.add("rotate");
  setTimeout(() => modeToggle.classList.remove("rotate"), 600);

  modeToggle.textContent = isDark ? "🌙" : "☀️";
  logoImg.src = isDark ? "assets/White.png" : "assets/Black.png";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

modeToggle.addEventListener("click", toggleDarkMode);

// -----------------------------------
// Language Switch Function
// -----------------------------------
function applyLanguage(lang) {
  fadeText("hero-text", translations[lang].hero);
  fadeText("projects-link", translations[lang].projects);
  fadeText("about-link", translations[lang].about);
  fadeText("contact-link", translations[lang].contact);

  const heroText = document.getElementById("hero-text");
  const heroLinks = document.querySelector(".hero-links");

  if (lang === "ar") {
    heroText.classList.add("arabic");
    heroLinks.classList.add("arabic");
  } else {
    heroText.classList.remove("arabic");
    heroLinks.classList.remove("arabic");
  }

  langSwitch.textContent = lang.toUpperCase();
  localStorage.setItem("lang", lang);
}

langSwitch.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyLanguage(currentLang);
});

// -----------------------------------
// Smooth Fade Text Function
// -----------------------------------
function fadeText(id, newText) {
  const el = document.getElementById(id);
  el.style.opacity = 0;
  setTimeout(() => {
    el.innerHTML = newText;
    el.style.opacity = 1;
  }, 300);
}

// -----------------------------------
// Restore saved preferences on page load
// -----------------------------------
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    modeToggle.textContent = "🌙";
    logoImg.src = "assets/White.png";
  } else {
    logoImg.src = "assets/Black.png";
  }

  applyLanguage(currentLang);
});
