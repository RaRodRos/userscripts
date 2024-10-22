// ==UserScript==
// @name           GOOGLEACTIVITY-emptySearch
// @namespace      https://github.com/RaRodRos
// @match          https://myactivity.google.com/myactivity?pli=1&q=*
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/GOOGLEACTIVITY-emptySearch.user.js
// ==/UserScript==

if (document.querySelector('img[alt="Imagen de Sin actividad"]')) {
  window.close();
}
