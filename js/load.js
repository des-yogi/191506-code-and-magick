'use strict';

window.load = (function () {

  return function (url, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad);
    // xhr.addEventListener('error', errorHandler);
    // xhr.addEventListener('timeout', errorHandler);
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.send();
  };
})();
