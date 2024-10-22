// ==UserScript==
// @name           MILANUNCIOS-userProfile
// @namespace      https://github.com/RaRodRos
// @match          https://www.milanuncios.com/anuncios-usuario*
// @match          https://www.milanuncios.com/mis-mensajes/id/*
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/MILANUNCIOS-userProfile.user.js
// @run-at         document_end
// ==/UserScript==

const observer = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (/msg-header__link/.test(mutation.addedNodes[0].className)) {
      mutation.addedNodes[0].href = mutation.addedNodes[0].href.replace(
        "/anuncios-usuario/",
        `/anuncios-usuario/${mutation.addedNodes[0].title
          .replace(" ", "-")
          .toLowerCase()}-`
      );
      obs.disconnect();
      return;
    }
  });
});

observer.observe(document.getElementById("app"), {
  childList: true,
  subtree: true,
});
