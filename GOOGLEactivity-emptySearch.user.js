// ==UserScript==
// @name           GOOGLEactivity-emptySearch
// @match          https://myactivity.google.com/myactivity?pli=1&q=*
// @version        1.0
// ==/UserScript==

if (document.querySelector('img[alt="Imagen de Sin actividad"]')) {
  window.close();
}