// ==UserScript==
// @name           LanguageChangeRemove
// @namespace      https://github.com/RaRodRos
// @match          https://es.reactjs.org/*
// @match          https://www.atlassian.com/es*
// @run-at         document-start
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/LanguageChangeRemove.user.js
// ==/UserScript==

window.location.replace(window.location.href.replace(/es\.?/, ""));
