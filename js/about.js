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
      hero: "About Me",
      follow: "Follow Me",
      insta: "Instagram",
      linkedin: "LinkedIn",
      youtube: "YouTube",
      form: "Who I Am",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      siteby: "Site by Kouidri Ranim",
      aboutText: `Hey, my name is Kouidri Ranim. I’m a Front-End Developer, Python enthusiast, and video editor from Algeria. I’m passionate about bringing designs to life with clean, modern interfaces, and I love exploring new technologies to constantly improve my skills. Outside of coding, I enjoy reading books, filming vlogs, and learning about AI, math, and physics. Front-end development is my true passion, and I’m always curious to experiment and build projects that combine creativity and technology.`,
      resume: "Resume"
  },
  ar: {
      hero: "من أنا",
      follow: "تابعني",
      insta: "إنستجرام",
      linkedin: "لينكدإن",
      youtube: "يوتيوب",
      form: "من أنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      siteby: "الموقع من تصميم قويدري رنيم",
      aboutText: `مرحبًا، اسمي قويدري رنيم. أنا مطوّر واجهات أمامية، مهتم بلغة بايثون، ومحرّر فيديوهات من الجزائر. أنا شغوف بتحويل التصاميم إلى واجهات نظيفة وعصرية، وأحب استكشاف التقنيات الجديدة لتحسين مهاراتي باستمرار. خارج مجال البرمجة، أستمتع بقراءة الكتب، تصوير الفيديوهات، وتعلّم مجالات الذكاء الاصطناعي، الرياضيات، والفيزياء. تطوير الواجهات الأمامية هو شغفي الحقيقي، ودائمًا ما أبحث عن تجربة وبناء مشاريع تجمع بين الإبداع والتكنولوجيا.`,
      resume: "سيرتي الذاتية"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  const idsToTranslate = ["hero", "follow", "insta", "linkedin", "youtube", "form", "privacy", "terms", "siteby"];
  idsToTranslate.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[lang][id];
  });

  // Update the about paragraph
  const aboutP = document.querySelector(".about-section p");
  if (aboutP) aboutP.textContent = translations[lang].aboutText;

  // Update the resume link text
  const resumeLink = document.querySelector(".about-section a.resume-link");
  if (resumeLink) resumeLink.textContent = translations[lang].resume;

  const container = document.querySelector(".container");
  if (lang === "ar") {
    container.classList.add("arabic");
  } else {
    container.classList.remove("arabic");
  }

  localStorage.setItem("lang", lang);
}


// --- Language toggle ---
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
  if(circle) {
    circle.style.left = e.clientX + 'px';
    circle.style.top = e.clientY + 'px';
  }
});
