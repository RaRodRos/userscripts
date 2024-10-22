// ==UserScript==
// @name           STEAMFORUMS-ageCheck
// @namespace      https://github.com/RaRodRos
// @match          https://steamcommunity.com/*
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/STEAMFORUMS-ageCheck.user.js
// ==/UserScript==

// No age check in forums when not logged in
document.getElementsByClassName("responsive_page_template_content")[0].removeAttribute('style');
document.getElementById("footer").removeAttribute('style');
document.getElementsByClassName("adult_content_age_gate")[0].parentElement.remove();