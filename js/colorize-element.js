'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];
  if (!currentColor) {
    currentColor = colors[0];
  }

  var activityHandler = function (e) {
    var newColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = newColor;
    currentColor = newColor;
  };

  element.addEventListener('click', function (e) {
    activityHandler(e);
  });

  element.addEventListener('keydown', function (e) {
    if (isActivateEvent(e)) {
      activityHandler(e);
    }
  });
};
