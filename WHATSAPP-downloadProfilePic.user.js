// ==UserScript==
// @name           WHATSAPP-downloadProfilePic
// @match          https://web.whatsapp.com/*
// @match          https://web.whatsapp.com/
// @version        1.0
// ==/UserScript==

// USAR EL OBSERVER DEL TELÉFONO Y MODIFICARLO PARA LOCALIZAR Y DESCARGAR LA IMAGEN DEL PERFIL
// Habría que comprobar a ver si se puede acceder a ella sin tener que abrir el perfil, sea realizando una llamada o indagando en el DOM

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'class' && (mutation.target.classList.contains('_1jJ70') || mutation.target.classList.contains('three'))) {
      const tel = Array.from(mutation.target.lastElementChild.getElementsByTagName('section')[0].getElementsByTagName('span')).find((span) => /[\d+\s]/.test(span.textContent));
      if (tel) {
        const newLink = document.createElement('a');
        const cleanTel = tel.textContent.replace(/\+34|\s/g, '');
        newLink.innerText = tel.innerText;
        newLink.setAttribute('href', `https://www.google.com/search?&q=${cleanTel}`);
        newLink.setAttribute('rel', "noreferrer noopener");
        newLink.setAttribute('target', "_blank");
        tel.innerText = null;
        tel.appendChild(newLink);
        return;
      }
    }
  });
});

observer.observe(document.getElementById('app'), {
  childList: true,
  subtree: true,
  attributes: true
});