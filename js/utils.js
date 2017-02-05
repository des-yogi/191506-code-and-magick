'use strict';

window.utils = {
  getRandomElement: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  getRandomElementExcept: function (arr, currentItem) {
    for (var i = 0; i < 20; i++) {
      var randColor = window.utils.getRandomElement(arr);
      if (currentItem !== randColor) {
        return randColor;
      }
    }
  }
};
