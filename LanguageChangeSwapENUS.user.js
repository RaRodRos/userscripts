/*
==UserScript==
@name           LanguageChangeSwapENUS
@match          https://developer.mozilla.org/es/*
@match          https://docs.microsoft.com/es-es/*
@run-at         document-start
@version        1.0
==/UserScript==
*/

window.location.replace(window.location.href.replace(/(\/es(?:-es)?\/)/, "/en-us/"));