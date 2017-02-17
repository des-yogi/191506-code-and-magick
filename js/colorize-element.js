'use strict';

window.colorizeElement = (function () {
  return function (element, colors, fillCallback) {
    var currentColor = colors[0];

    var activityHandler = function (e) {
      var newColor = window.utils.getRandomElementExcept(colors, currentColor);
      var URL_DATA = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';
      fillCallback(element, newColor, URL_DATA);
      currentColor = newColor;
    };

    element.addEventListener('click', function (e) {
      activityHandler(e);
    });

    element.addEventListener('keydown', function (e) {
      if (window.utils.isActivateEvent(e)) {
        activityHandler(e);
      }
    });
  };
})();
