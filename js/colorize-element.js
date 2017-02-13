'use strict';

window.colorizeElement = (function () {

  return function (cb) {

    if (typeof cb === 'function') {
      cb();
    }
  };

})();
