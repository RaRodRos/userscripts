// ==UserScript==
// @name           LanguageChangeSwapENUS
// @namespace      https://github.com/RaRodRos
// @match          https://developer.mozilla.org/es/*
// @match          https://docs.microsoft.com/es-es/*
// @run-at         document-start
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/LanguageChangeSwapENUS.user.js
// ==/UserScript==

window.location.replace(
  window.location.href.replace(/(\/es(?:-es)?\/)/, "/en-us/")
);
