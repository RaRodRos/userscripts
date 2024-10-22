// ==UserScript==
// @name           WHATSAPP-goToWeb
// @namespace      https://github.com/RaRodRos
// @match          https://api.whatsapp.com/send*
// @match          https://web.whatsapp.com/send*
// @run-at         document-start
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/WHATSAPP-goToWeb.user.js
// ==/UserScript==

if (window.location.href.match(/https:\/\/api|&text=|\?phone=([67]\d{8}|.*\D.*)/)) {
  window.location.assign(
    "https://web.whatsapp.com/send/?phone=" +
    decodeURIComponent(window.location.href).replace(
      /.*?\?phone=\D*(.*?.(?=[?&])|.*).*/,
      (match, phoneParam) => {
        const numberResult = phoneParam.replace(/\D/g, "");
        return /^[67]\d{8}$/.test(numberResult) ? "34" + numberResult : numberResult;
      }
    )
  );
}