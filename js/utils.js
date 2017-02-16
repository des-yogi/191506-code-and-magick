'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isKeyboardEvent = function (e) {
    return typeof e.keyCode !== 'undefined';
  };

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
      return isKeyboardEvent(e) && e.keyCode === ENTER_KEY_CODE;
    },

    isDeactivateEvent: function (e) {
      return isKeyboardEvent(e) && e.keyCode === ESCAPE_KEY_CODE;
    },

    changeIDtoClass: function (arr) {
      for (var i = 0; i < arr.length; ++i) {
        var item = arr[i].getAttribute("id");
        arr[i].setAttribute('class', item);
        arr[i].removeAttribute('id');
      }
    }

  };

})();
