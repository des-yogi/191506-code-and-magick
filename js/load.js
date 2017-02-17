'use strict';

window.load = (function () {

  return function (url, onLoad) {

    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad);
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.send();
  };

})();
