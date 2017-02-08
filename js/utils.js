'use strict';

window.utils = (function() {
  var ENTER_KEY_CODE = 13;

  return {
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
      return arr[0];
    },

    isActivateEvent: function (e) {
      return e.keyCode && e.keyCode === ENTER_KEY_CODE;
    }
  };

})();


/*window.utils = {
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
    return arr[0];
  },

  isActivateEvent: function (e) {
    return e.keyCode && e.keyCode === ENTER_KEY_CODE;
  }
};
*/
