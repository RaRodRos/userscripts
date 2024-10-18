// ==UserScript==
// @name           500PX-copyNsfw
// @match          https://500px.com/photo/*
// @version        1.0.4
// ==/UserScript==

const observer = new MutationObserver((mutations, obs) => {
  mutations.forEach((mutation) => {
    if (mutation.type !== "childList"){ return; }
    mutation.addedNodes.forEach(addedNode => {
      if (/copyrightTooltipContainer/.test(addedNode.id)) {
        let aviso = addedNode.children[0].children[1];
        if (/PhotoNSFWCover/.test(aviso.className)) {
          aviso.remove();
          obs.disconnect();
        }
    }});
  });
});
let root = document.getElementById("root");
observer.observe(root, {childList: true, subtree: true});
