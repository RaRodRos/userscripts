// ==UserScript==
// @name           WHATSAPP-addGoogleSearchToPhone
// @namespace      https://github.com/RaRodRos
// @match          https://web.whatsapp.com/*
// @match          https://web.whatsapp.com/
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/WHATSAPP-addGoogleSearchToPhone.user.js
// @require        https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/UtilitiesPack.user.js
// ==/UserScript==

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (
      mutation.attributeName === "class" &&
      (mutation.target.classList.contains("_1jJ70") ||
        mutation.target.classList.contains("three"))
    ) {
      const tel = Array.from(
        mutation.target.lastElementChild
          .getElementsByTagName("section")[0]
          .getElementsByTagName("span")
      ).find((span) => /[\d+\s]{9,}/.test(span.textContent));
      if (tel) {
        const newLink = document.createElement("a");
        const cleanTel = tel.textContent.replace(/\+34|\s/g, "");
        newLink.innerText = tel.innerText;
        newLink.setAttribute(
          "href",
          `https://www.google.com/search?&q=${cleanTel}`
        );
        newLink.setAttribute("rel", "noreferrer noopener");
        newLink.setAttribute("target", "_blank");
        newLink.addEventListener("click", () => copyToClipboard(cleanTel));
        tel.innerText = null;
        tel.appendChild(newLink);
        return;
      }
    }
  });
});

observer.observe(document.getElementById("app"), {
  childList: true,
  subtree: true,
  attributes: true,
});
