var LINK_SELECTOR = '[href]';

function onClickHandler(url) {
    'use strict';
    url.addEventListener('click', function(event) {
        event.preventDefault();
    });
}

function intializeHijack() {
    'use strict';
    var allLinks = document.querySelectorAll(LINK_SELECTOR);
    var allLinksArray = [].slice.call(allLinks);
    allLinksArray.forEach(onClickHandler);

}

intializeHijack();
