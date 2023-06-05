// ==UserScript==
// @name         redirect-github-docs-to-english
// @namespace    https://github.com/toof-jp
// @version      0.1
// @description  This userscript redirects non-English GitHub Docs pages to their corresponding English pages.
// @author       toof-jp
// @match        https://docs.github.com/*
// @updateURL    https://github.com/toof-jp/redirect-github-docs-to-english/raw/main/main.user.js
// @downloadURL  https://github.com/toof-jp/redirect-github-docs-to-english/raw/main/main.user.js
// @supportURL   https://github.com/toof-jp/redirect-github-docs-to-english
// ==/UserScript==

(function() {
    'use strict';

    var url_segments = location.href.split('/');
    if (url_segments[3] != 'en') {
        url_segments[3] = 'en';
        var english_url = url_segments.join('/');
        window.location.replace(english_url);
    }
})();
