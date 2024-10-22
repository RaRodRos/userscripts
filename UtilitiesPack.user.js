// ==UserScript==
// @name           UtilitiesPack
// @namespace      https://github.com/RaRodRos
// @version        1.0
// @updateURL      https://raw.githubusercontent.com/RaRodRos/userscripts/refs/heads/master/UtilitiesPack.user.js
// ==/UserScript==

function copyToClipboard(text, msg) {
  navigator.clipboard.writeText(text).then(
    () => console.log((msg || "Phone") + "succesfully copied"),
    (e) => console.log(`error writing ${msg || "phone"} in clipboard: ` + e)
  );
}

function videosVolume(volume) {
  Array.from(document.getElementsByTagName('video'))
    .forEach(video => video.volume = volume || 0.01);
}

function replaceAllPhoneLinksWithGoogle(links) {
  const arrayLinks = links ? Array.isArray(links) ? links : [links] : Array.from(document.querySelectorAll('a[href^=tel]'));
  arrayLinks.forEach(
    e => {
      e.href = e.href.replace(
        /tel:.*(?=\d{9})/,
        'https://www.google.com/search?q=');
      e.target = '_blank';
    }
  );
}