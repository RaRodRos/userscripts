/*
==UserScript==
@name           LanguageChangeRemove
@match          https://es.reactjs.org/*
@match          https://www.atlassian.com/es*
@run-at         document-start
@version        1.0
==/UserScript==
*/

window.location.replace(window.location.href.replace(/es\.?/,''));