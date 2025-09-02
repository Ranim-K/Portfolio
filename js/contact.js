const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

// --- Dark/Light Mode ---
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  modeToggle.classList.add("rotate");
  setTimeout(() => modeToggle.classList.remove("rotate"), 600);

  modeToggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// --- Translation System ---
const translations = {
  en: {
    hero: "Get in Touch",
    follow: "Follow Me",
    insta: "Instagram",
    linkedin: "LinkedIn",
    youtube: "YouTube",
    form: "Contact Form",
    email: "Your Email",
    msg: "Your Message",
    send: "Send",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    siteby: "Site by Kouidri Ranim"
  },
  ar: {
    hero: "تواصل معي",
    follow: "تابعني",
    insta: "إنستغرام",
    linkedin: "لينكدإن",
    youtube: "يوتيوب",
    form: "نموذج الاتصال",
    email: "بريدك الإلكتروني",
    msg: "رسالتك",
    send: "إرسال",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    siteby: "الموقع من إنجاز قويدري رنيم"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  // only translate content, not navbar
  const idsToTranslate = ["hero", "follow", "insta", "linkedin", "youtube", "form", "send", "privacy", "terms", "siteby"];
  idsToTranslate.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  });

  // placeholders for inputs
  const emailInput = document.getElementById("email");
  const msgInput = document.getElementById("msg");
  if (emailInput) emailInput.placeholder = translations[lang].email;
  if (msgInput) msgInput.placeholder = translations[lang].msg;

  // toggle arabic class for styling
  const container = document.querySelector(".container");
  if (lang === "ar") {
    container.classList.add("arabic");
  } else {
    container.classList.remove("arabic");
  }

  localStorage.setItem("lang", lang);
}

// --- Language toggle (separate button) ---
const langSwitch = document.getElementById("lang-toggle");
langSwitch.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  langSwitch.textContent = currentLang.toUpperCase();
  applyLanguage(currentLang);
});

// --- Restore preferences on load ---
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    modeToggle.textContent = "🌙";
  }
  const savedLang = localStorage.getItem("lang") || "en";
  langSwitch.textContent = savedLang.toUpperCase();
  applyLanguage(savedLang);
});

// --- Cursor Circle ---
const circle = document.querySelector('.circle');
document.addEventListener('mousemove', (e) => {
  circle.style.left = e.clientX + 'px';
  circle.style.top = e.clientY + 'px';
});
