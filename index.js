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

  if (translations[lang].pageTitle) {
    document.title = translations[lang].pageTitle;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  const form = document.getElementById('reflectionForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const ans1 = document.getElementById('ans1').value.trim();
    const ans2 = document.getElementById('ans2').value.trim();
    const ans3 = document.getElementById('ans3').value.trim();

    const answers = { ans1, ans2, ans3, submittedAt: new Date().toISOString() };

    localStorage.setItem('reflectionAnswers', JSON.stringify(answers));
    alert("Your reflection has been saved. Thank you!");
    form.reset();
  });
});
