document.addEventListener("DOMContentLoaded", () => {
  // 1. Inyectar la capa de textura (Parchment Overlay)
  const overlay = document.createElement("div");
  overlay.className = "parchment-overlay";
  document.body.prepend(overlay);

  // 2. Inyectar las copas con fuego azul
  const gobletsHTML = `
    <div class="goblet goblet-left">
      <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="blue-flame">
          <path d="M50 5C50 5 32 25 32 45C32 58 40 68 50 68C60 68 68 58 68 45C68 25 50 5 50 5Z" fill="#00d2ff" />
          <path d="M50 20C50 20 38 35 38 48C38 56 43 62 50 62C57 62 62 56 62 48C62 35 50 20 50 20Z" fill="#e0ffff" />
        </g>
        <path d="M25 55 C25 80 38 90 47 92 L47 115 L35 125 L35 130 L65 130 L65 125 L53 115 L53 92 C62 90 75 80 75 55 Z" fill="url(#silverGrad)" stroke="#111" stroke-width="1.5"/>
        <ellipse cx="50" cy="55" rx="25" ry="5" fill="#222" stroke="#000"/>
        <defs>
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#404040" />
            <stop offset="30%" stop-color="#c0c0c0" />
            <stop offset="50%" stop-color="#ffffff" />
            <stop offset="70%" stop-color="#808080" />
            <stop offset="100%" stop-color="#252525" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <div class="goblet goblet-right">
      <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="blue-flame">
          <path d="M50 5C50 5 32 25 32 45C32 58 40 68 50 68C60 68 68 58 68 45C68 25 50 5 50 5Z" fill="#00d2ff" />
          <path d="M50 20C50 20 38 35 38 48C38 56 43 62 50 62C57 62 62 56 62 48C62 35 50 20 50 20Z" fill="#e0ffff" />
        </g>
        <path d="M25 55 C25 80 38 90 47 92 L47 115 L35 125 L35 130 L65 130 L65 125 L53 115 L53 92 C62 90 75 80 75 55 Z" fill="url(#silverGradRight)" stroke="#111" stroke-width="1.5"/>
        <ellipse cx="50" cy="55" rx="25" ry="5" fill="#222" stroke="#000"/>
        <defs>
          <linearGradient id="silverGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#404040" />
            <stop offset="30%" stop-color="#c0c0c0" />
            <stop offset="50%" stop-color="#ffffff" />
            <stop offset="70%" stop-color="#808080" />
            <stop offset="100%" stop-color="#252525" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  `;
  document.body.insertAdjacentHTML("afterbegin", gobletsHTML);

// 3. Inyectar el Header arriba del contenedor principal
  const wrapper = document.querySelector(".lobby-wrapper");
  if (wrapper) {
    const headerHTML = `
      <header>
        <a href="/soulfirenation/index.htm" class="site-title-link">
          <h1 class="site-title">Soulfire Nation</h1>
        </a>
        <div class="site-subtitle">Archival Records</div>
      </header>
      <hr class="parchment-hr">
    `;
    wrapper.insertAdjacentHTML("afterbegin", headerHTML);
  }

  // 4. Inyectar el Footer al final del body
  const footerHTML = `
<footer>
  <p>SOULFIRE NATION ARCHIVES — WORK BY <a href="https://renoquintero.com">RENO QUINTERO</a></p>
  <a href="/soulfirenation/index.htm">[Back to main]</a>
  <p style="margin-top: 0.25rem; opacity: 0.6;">"To honor them both"</p>
</footer>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
// 5. Inyectar language select
  window.gtranslateSettings = {
    default_language: "en",
    native_language_names: true,
    detect_browser_language: true,
    languages: ["en", "es", "it", "fr"],
    wrapper_selector: ".gtranslate_wrapper",
    flag_style: "3d",
    alt_flags: { en: "usa", es: "mexico" },
  };

  const gtranslateScript = document.createElement("script");
  gtranslateScript.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
  gtranslateScript.defer = true;
  document.body.appendChild(gtranslateScript);
});
// Límite en píxeles antes de que se congelen
const SCROLL_LIMIT = 1350; 

window.addEventListener("scroll", () => {
  const goblets = document.querySelectorAll(".goblet");
  
  goblets.forEach((goblet) => {
    if (window.scrollY > SCROLL_LIMIT) {
      goblet.classList.add("stopped");
    } else {
      goblet.classList.remove("stopped");
    }
  });
});
