do you see any wrong in back button :
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
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/about.css">
  <link rel="stylesheet" href="css/background.css">
  <link rel="stylesheet" href="css/responsive.css">
  <link rel="stylesheet" href="css/projects.css">
  <script src="js/projects.js" defer></script>
  <title>Projects</title>
</head>
<body>
  <div class="background">
    <span></span><span></span><span></span><span></span><span></span>
    <span></span><span></span><span></span><span></span><span></span>
  </div>

  <div class="container">
    <!-- Top bar -->
    <div class="top-bar">
      <div><a href="index.html" id="home-logo">Kouidri Ranim</a></div>
      <div class="top-right">
        <div id="lang-toggle">Ar</div>
        <div id="mode-toggle" aria-label="Toggle theme">☀️</div>
      </div>
    </div>

    <!-- Project Section -->
    <div class="about-section" id="projects-section">
      <!-- MAIN CARDS (no images) -->
      <div id="main-cards" class="cards-wrapper">
        <div class="big-card" data-target="python-projects">Python Projects</div>
        <div class="big-card" data-target="pixel-projects">Pixel Perfect</div>
        <div class="big-card" data-target="web-projects">Web Projects</div>
      </div>

      <!-- PYTHON PROJECTS -->
      <div id="python-projects" class="cards-wrapper hidden">
        <button class="back-btn">⬅ Back</button>

        <div class="project-card">
          <img src="assets/thumb1.png" alt="Calculator Thumbnail">
          <h3>Calculator</h3>
          <p>A simple Python calculator app.</p>
          <div class="tech"><strong>Technologies:</strong> Python, Tkinter</div>
          <div class="project-buttons">
            <a href="#" target="_blank" class="btn">View Project</a>
            <a href="#" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/thumb2.png" alt="Data Visualizer Thumbnail">
          <h3>Data Visualizer</h3>
          <p>Matplotlib + Pandas project.</p>
          <div class="tech"><strong>Technologies:</strong> Python, Matplotlib, Pandas</div>
          <div class="project-buttons">
            <a href="#" target="_blank" class="btn">View Project</a>
            <a href="#" target="_blank" class="btn">View Code</a>
          </div>
        </div>

      </div>

      <!-- PIXEL PROJECTS -->
      <div id="pixel-projects" class="cards-wrapper hidden">
        <button class="back-btn">⬅ Back</button>

        <div class="project-card">
          <img src="assets/pixel1.png" alt="Tennis Club Website Thumbnail">
          <h3>Tennis Club Website</h3>
          <p>Pixel perfect Behance → HTML/CSS.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, Behance</div>
          <div class="project-buttons">
            <a href="https://www.behance.net/gallery/233760983/Pixel-Perfect-Tennis-Club-Design-Website" target="_blank" class="btn">View Project</a>
            <a href="https://ranim-k.github.io/Tennis-Club-Website/" target="_blank" class="btn">View Live</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/Portfolio.gif" alt="Portfolio Landing Page Thumbnail">
          <h3>Portfolio Landing Page</h3>
          <p>A personal portfolio landing page built with front-end code, designed to introduce myself and highlight key skills. Features a clean hero section, about section, and simple contact options.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-03%20Portfolio/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-03%20Portfolio" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/password.gif" alt="Password Generator Thumbnail">
          <h3>Password Generator</h3>
          <p>A simple password generator that creates secure random passwords with customizable length and character options.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-06%20Password%20Generator/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-06%20Password%20Generator" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/auth.gif" alt="Auth Registration Page Thumbnail">
          <h3>Auth Registration Page</h3>
          <p>A user registration page built with front-end code, featuring form validation and a clean, user-friendly interface.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-09%20Login%20%26%20SignUp/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-09%20Login%20%26%20SignUp" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/count.gif" alt="Countdown Launch Page Thumbnail">
          <h3>Countdown Launch Page</h3>
          <p>A countdown launch page built with front-end code, featuring a live timer and a clean, engaging design to announce upcoming events.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-08%20CountDown/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-08%20CountDown" target="_blank" class="btn">View Code</a>
          </div>
        </div>

      </div>

      <!-- WEB PROJECTS -->
      <div id="web-projects" class="cards-wrapper hidden">
        <button class="back-btn">⬅ Back</button>

        <div class="project-card">
          <img src="assets/thumb4.png" alt="Portfolio Website Thumbnail">
          <h3>Portfolio Website</h3>
          <p>Responsive portfolio project.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JavaScript</div>
          <div class="project-buttons">
            <a href="#" target="_blank" class="btn">View Project</a>
            <a href="#" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/landing.png" alt="Landing Page Thumbnail">
          <h3>Landing Page</h3>
          <p>A static landing page built with clean front-end code, focusing on structure and visual design. Includes a hero section, content highlights, and clear call-to-action elements.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-01%20landing%20page/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-01%20landing%20page" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/quiz.gif" alt="Interactive Quiz Wizard Thumbnail">
          <h3>Interactive Quiz Wizard</h3>
          <p>An interactive quiz wizard built with front-end code, featuring multiple-choice questions, progress tracking, and instant feedback.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-10%20Quiz/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-10%20Quiz" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/qr.gif" alt="QR Code Reader Thumbnail">
          <h3>QR Code Reader</h3>
          <p>A QR code reader built with front-end code, allowing users to scan and decode QR codes directly in the browser.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-07%20QR%20Code%20Reader%20App/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-07%20QR%20Code%20Reader%20App" target="_blank" class="btn">View Code</a>
          </div>
        </div>

        <div class="project-card">
          <img src="assets/calc.gif" alt="Calculator App Thumbnail">
          <h3>Calculator App</h3>
          <p>A simple calculator app built with front-end code, supporting basic arithmetic operations with a clean and intuitive interface.</p>
          <div class="tech"><strong>Technologies:</strong> HTML, CSS, JS</div>
          <div class="project-buttons">
            <a href="https://ranim-k.github.io/Web-Projects/Day-04%20Calculator/" target="_blank" class="btn">View Project</a>
            <a href="https://github.com/Ranim-K/Web-Projects/tree/main/Day-04%20Calculator" target="_blank" class="btn">View Code</a>
          </div>
        </div>

      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div class="footer-left">© 2025 Kouidri Ranim</div>
      <div class="footer-center">
        <a href="#" id="privacy">Privacy Policy</a>
        <a href="#" id="terms">Terms of Use</a>
      </div>
      <div class="footer-right" id="siteby">Site by Kouidri Ranim</div>
    </div>
  </div>
</body>
</html>
.about-section#projects-section {
  justify-content: flex-start; 
  align-items: center; 
  overflow: auto; 
  padding-bottom: 40px; 
  max-height: calc(95vh - 100px); 
}

#main-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: auto;
  margin-bottom: auto;
  width: 80%;
}

.cards-wrapper {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.hidden {
  display: none;
  opacity: 0;
  transform: translateY(20px);
}

.big-card {
  flex: 1 1 250px;
  border: 3px solid var(--border-color);
  border-radius: 10px;
  padding: 40px 20px;
  text-align: center;
  font-size: 22px;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
}

.big-card:hover {
  transform: scale(1.05);
  background: rgba(0,0,0,0.05);
}

.project-card {
  flex: 1 1 300px;
  max-width: 300px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: var(--bg-color);
}

.project-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.project-card h3 {
  margin: 10px 0 8px 0;
  font-size: 20px;
  line-height: 1.2;
}

.project-card p {
  font-size: 15px;
  line-height: 1.6;
  width: 110%;
  text-align: left;
  margin-bottom: 5px;
}

.project-card .tech {
  font-size: 14px;
  margin: 5px 0 10px 0;
  width: 100%;
  text-align: left;
  color: var(--text-color);
}

.project-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.project-buttons .btn {
  padding: 8px 14px;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  text-decoration: none;
  color: var(--text-color);
  font-size: 14px;
  transition: background 0.3s, color 0.3s, transform 0.2s;
}

.project-buttons .btn:hover {
  background: var(--border-color);
  color: var(--bg-color);
  transform: scale(1.05);
}

.back-btn {
  flex-basis: 100%;
  padding: 8px 16px;
  margin-bottom: 20px;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  color: var(--text-color);
}

.cards-wrapper:not(#main-cards) .back-btn {
  align-self: flex-start;
}

#mode-toggle.rotate {
  transform: rotate(360deg);
  transition: transform 0.6s ease;
}

.container.arabic {
  font-family: 'Amiri', serif;
} 

body.arabic .project-card p {
  margin-right: 15%;
  direction: rtl;
  text-align: right;
  margin-left: 15%;
}
