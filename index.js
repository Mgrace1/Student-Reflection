function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update page title
  if (translations[lang].pageTitle) {
    document.title = translations[lang].pageTitle;
  }
}

// Load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
});
