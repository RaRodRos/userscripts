// ==UserScript==
// @name           WHATSAPP-goToAPI
// @match          https://web.whatsapp.com/send*
// @match          https://api.whatsapp.com/send*
// @run-at         document-start
// @version        1.0
// ==/UserScript==

if (window.location.href.match(/https:\/\/web|&text=|\?phone=([67]\d{8}|.*\D.*)/)) {
  window.location.assign(
    "https://api.whatsapp.com/send/?phone=" +
    decodeURIComponent(window.location.href).replace(
      /.*?\?phone=\D*(.*?.(?=[?&])|.*).*/,
      (match, phoneParam) => {
        const numberResult = phoneParam.replace(/\D/g, "");
        return /^[67]\d{8}$/.test(numberResult) ? "34" + numberResult : numberResult;
      }
    )
  );
}