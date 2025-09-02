const body = document.body;
const modeToggle = document.getElementById("mode-toggle");
const langSwitch = document.getElementById("lang-toggle");
const homeLogo = document.getElementById("home-logo");

// --- Dark/Light Mode ---
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  modeToggle.classList.add("rotate");
  setTimeout(() => modeToggle.classList.remove("rotate"), 600);
  modeToggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// --- Translations + Projects ---
const translations = {
  en: {
    python: "Python Projects",
    pixel: "Pixel Perfect",
    web: "Web Projects",
    back: "⬅ Back",
    pythonProjects: [
      {title:"Calculator", desc:"A simple Python calculator app.", tech:"Python, Tkinter", image:"assets/thumb1.png", liveLink:"#", codeLink:"#"},
      {title:"Data Visualizer", desc:"Matplotlib + Pandas project.", tech:"Python, Matplotlib, Pandas", image:"assets/thumb2.png", liveLink:"#", codeLink:"#"}
    ],
    pixelProjects: [
      {title:"Tennis Club Website", desc:"A sleek Behance design faithfully transformed into a responsive, multi-language HTML/CSS/JS website.", tech:"HTML, CSS, JS, Behance", image:"assets/pixel1.png", liveLink:"https://ranim-k.github.io/Tennis-Club-Website/", codeLink:"https://www.behance.net/gallery/233760983/Pixel-Perfect-Tennis-Club-Design-Website"},
      {title:"Portfolio Landing Page", desc:"A personal portfolio landing page built with front-end code, designed to introduce myself and highlight key skills. Features a clean hero section, about section, and simple contact options.", tech:"HTML, CSS", image:"assets/Portfolio.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-03%20Portfolio/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-03%20Portfolio"},
      {title:"Password Generator", desc:"A simple password generator that creates secure random passwords with customizable length and character options.", tech:"HTML, CSS, JS", image:"assets/password.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-06%20Password%20Generator/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-06%20Password%20Generator"},
      {title:"Auth Registration Page", desc:"A user registration page built with front-end code, featuring form validation and a clean, user-friendly interface.", tech:"HTML, CSS, JS", image:"assets/auth.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-09%20Login%20%26%20SignUp/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-09%20Login%20%26%20SignUp"},
      {title:"Countdown Launch Page", desc:"A countdown launch page built with front-end code, featuring a live timer and a clean, engaging design to announce upcoming events.", tech:"HTML, CSS, JS", image:"assets/count.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-08%20CountDown/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-08%20CountDown"}
    ],
    webProjects: [
      {title:"Portfolio Website", desc:"Responsive portfolio project.", tech:"HTML, CSS, JavaScript", image:"assets/thumb4.png", liveLink:"#", codeLink:"#"},
      {title:"Landing Page", desc:"A static landing page built with clean front-end code, focusing on structure and visual design. Includes a hero section, content highlights, and clear call-to-action elements.", tech:"HTML, CSS, JS", image:"assets/landing.png", liveLink:"https://ranim-k.github.io/Web-Projects/Day-01%20landing%20page/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-01%20landing%20page"},
      {title:"Interactive Quiz Wizard", desc:"An interactive quiz wizard built with front-end code, featuring multiple-choice questions, progress tracking, and instant feedback.", tech:"HTML, CSS, JS", image:"assets/quiz.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-10%20Quiz/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-10%20Quiz"},
      {title:"QR Code Reader", desc:"A QR code reader built with front-end code, allowing users to scan and decode QR codes directly in the browser.", tech:"HTML, CSS, JS", image:"assets/qr.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-07%20QR%20Code%20Reader%20App/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-07%20QR%20Code%20Reader%20App"},
      {title:"Calculator App", desc:"A simple calculator app built with front-end code, supporting basic arithmetic operations with a clean and intuitive interface.", tech:"HTML, CSS, JS", image:"assets/calc.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-04%20Calculator/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-04%20Calculator"}
    ],
    buttons: {viewProject: "View Project", viewCode: "View Code"}
  },
  ar: {
    python: "مشاريع بايثون",
    pixel: "دقة بكسل",
    web: "مشاريع ويب",
    back: "⬅ رجوع",
    pythonProjects: [
      {title:"حاسبة", desc:"تطبيق بايثون بسيط للحساب.", tech:"بايثون، Tkinter", image:"assets/thumb1.png", liveLink:"#", codeLink:"#"},
      {title:"مصور البيانات", desc:"مشروع Matplotlib + Pandas.", tech:"بايثون، Matplotlib، Pandas", image:"assets/thumb2.png", liveLink:"#", codeLink:"#"}
    ],
    pixelProjects: [
      {title:"موقع نادي التنس", desc:"تحويل تصميم Behance بدقة إلى موقع متجاوب متعدد اللغات باستخدام HTML/CSS/JS.", tech:"HTML، CSS، Figma", image:"assets/pixel1.png", liveLink:"https://ranim-k.github.io/Tennis-Club-Website/", codeLink:"https://www.behance.net/gallery/233760983/Pixel-Perfect-Tennis-Club-Design-Website"},
      {title:"صفحة هبوط البورتفوليو", desc:"صفحة هبوط شخصية للبورتفوليو مبنية بكود واجهة أمامية، مصممة للتعريف بي وإبراز المهارات الأساسية. تتضمن قسمًا رئيسيًا، قسمًا تعريفيًا، وخيارات تواصل بسيطة.", tech:"HTML، CSS", image:"assets/Portfolio.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-03%20Portfolio/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-03%20Portfolio"},
      {title:"مولّد كلمات المرور", desc:"مولّد كلمات مرور بسيط يُنشئ كلمات مرور عشوائية وآمنة مع إمكانية تخصيص الطول ونوع الأحرف.", tech:"HTML، CSS، JS", image:"assets/password.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-06%20Password%20Generator/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-06%20Password%20Generator"},
      {title:"صفحة تسجيل المستخدم", desc:"صفحة تسجيل مستخدم مبنية بكود واجهة أمامية، تتضمن تحقق من صحة البيانات وواجهة نظيفة وسهلة الاستخدام.", tech:"HTML، CSS، JS", image:"assets/auth.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-09%20Login%20%26%20SignUp/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-09%20Login%20%26%20SignUp"},
      {title:"صفحة العد التنازلي", desc:"صفحة عد تنازلي للإطلاق مبنية بكود واجهة أمامية، تتضمن مؤقتًا مباشرًا وتصميمًا نظيفًا وجذابًا للإعلان عن الأحداث القادمة.", tech:"HTML، CSS، JS", image:"assets/count.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-08%20CountDown/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-08%20CountDown"}
    ],
    webProjects: [
      {title:"موقع المحفظة", desc:"مشروع موقع محفظة متجاوب.", tech:"HTML، CSS، JavaScript", image:"assets/thumb4.png", liveLink:"#", codeLink:"#"},
      {title:"صفحة هبوط", desc:"صفحة هبوط ثابتة تم بناؤها بكود واجهة أمامية منظم ونظيف، تركز على البنية والتصميم البصري. تتضمن قسمًا رئيسيًا، أبرز المحتويات، وعناصر دعوة لاتخاذ إجراء واضحة.", tech:"HTML، CSS، JS", image:"assets/landing.png", liveLink:"https://ranim-k.github.io/Web-Projects/Day-01%20landing%20page/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-01%20landing%20page"},
      {title:"أداة اختبار تفاعلية", desc:"أداة اختبار تفاعلية مبنية بكود واجهة أمامية، تتضمن أسئلة متعددة الخيارات، تتبع التقدم، وردود فعل فورية.", tech:"HTML، CSS، JS", image:"assets/quiz.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-10%20Quiz/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-10%20Quiz"},
      {title:"قارئ رموز QR", desc:"قارئ رموز QR مبني بكود واجهة أمامية، يتيح للمستخدمين مسح وفك رموز QR مباشرةً في المتصفح.", tech:"HTML، CSS، JS", image:"assets/qr.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-07%20QR%20Code%20Reader%20App/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-07%20QR%20Code%20Reader%20App"},
      {title:"تطبيق الآلة الحاسبة", desc:"تطبيق آلة حاسبة بسيط مبني بكود واجهة أمامية، يدعم العمليات الحسابية الأساسية بواجهة نظيفة وسهلة الاستخدام.", tech:"HTML، CSS، JS", image:"assets/calc.gif", liveLink:"https://ranim-k.github.io/Web-Projects/Day-04%20Calculator/", codeLink:"https://github.com/Ranim-K/Web-Projects/tree/main/Day-04%20Calculator"}
    ],
    buttons: {viewProject: "عرض المشروع", viewCode: "عرض الكود"}
  }
};

let currentLang = localStorage.getItem("lang") || "en";

// --- Helper to generate project cards dynamically ---
function generateCards(sectionId, projects){
  const container = document.getElementById(sectionId);
  container.innerHTML = `<button class="back-btn">${translations[currentLang].back}</button>`;
  
  projects.forEach(p=>{
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title} Thumbnail">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tech"><strong>Technologies:</strong> ${p.tech}</div>
      <div class="project-buttons">
        <a href="${p.liveLink}" target="_blank" class="btn">${translations[currentLang].buttons.viewProject}</a>
        <a href="${p.codeLink}" target="_blank" class="btn">${translations[currentLang].buttons.viewCode}</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// --- Apply language dynamically ---
function applyLanguage(lang){
  currentLang = lang;
  document.querySelector('[data-target="python-projects"]').textContent = translations[lang].python;
  document.querySelector('[data-target="pixel-projects"]').textContent = translations[lang].pixel;
  document.querySelector('[data-target="web-projects"]').textContent = translations[lang].web;

  generateCards("python-projects", translations[lang].pythonProjects);
  generateCards("pixel-projects", translations[lang].pixelProjects);
  generateCards("web-projects", translations[lang].webProjects);

  if(lang==="ar") body.classList.add("arabic");
  else body.classList.remove("arabic");
  localStorage.setItem("lang", lang);

  // Reattach back button listeners
  document.querySelectorAll(".back-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".cards-wrapper").forEach(sec=>sec.classList.add("hidden"));
      document.getElementById("main-cards").classList.remove("hidden");
    });
  });
}

// Language toggle
langSwitch.addEventListener("click", ()=>{
  const newLang = currentLang==="en" ? "ar" : "en";
  langSwitch.textContent = newLang.toUpperCase();
  applyLanguage(newLang);
});

// Restore preferences
window.addEventListener("DOMContentLoaded", ()=>{
  if(localStorage.getItem("theme")==="dark"){
    body.classList.add("dark");
    modeToggle.textContent="🌙";
  }
  const savedLang = localStorage.getItem("lang")||"en";
  langSwitch.textContent = savedLang.toUpperCase();
  applyLanguage(savedLang);
});

// Projects navigation
const mainSection = document.getElementById("main-cards");
const projectCards = document.querySelectorAll(".big-card");

projectCards.forEach(card=>{
  card.addEventListener("click", ()=>{
    const targetId = card.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("hidden");
    mainSection.classList.add("hidden");
  });
});

// Home logo
homeLogo.addEventListener("click",()=>{ window.location.href="index.html"; });
