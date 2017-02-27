var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;
var KEY_ONE = 49;
var KEY_TWO = 50;
var KEY_THREE = 51;
var KEY_FOUR = 52;
var KEY_FIVE = 53;
var KEY_SIX = 54;
var KEY_SEVEN = 55;
var KEY_EIGHT = 56;
var KEY_NINE = 57;
//var otterOneImage = 'img/otter1.jpg';
//var otterOneTitle = 'Stayin\' Alive';

function setDetails(imageURL, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageURL);
    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function(event) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}

function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function() {
        frame.classList.remove(TINY_EFFECT_CLASS);
    }, 50);

}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        var dynamicThumbnails = getThumbnailsArray();
        //console.log(event.keyCode);
        if (event.keyCode === ESC_KEY) {
            hideDetails();
        }
        if (event.keyCode === KEY_ONE) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[0]);
        }
        if (event.keyCode === KEY_TWO) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[1]);
        }
        if (event.keyCode === KEY_THREE) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[2]);
        }
        if (event.keyCode === KEY_FOUR) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[3]);
        }
        if (event.keyCode === KEY_FIVE) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[4]);
        }
        if (event.keyCode === KEY_SIX) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[5]);
        }
        if (event.keyCode === KEY_SEVEN) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[6]);
        }
        if (event.keyCode === KEY_EIGHT) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[7]);
        }
        if (event.keyCode === KEY_NINE) {
            showDetails();
            setDetailsFromThumb(dynamicThumbnails[8]);
        }
    });
}
initializeEvents();
