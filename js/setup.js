'use strict';

var URL_DATA = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';

// Открытие окна настройки персонажа.
var setup = document.querySelector('.setup');
var setupOpenBtn = document.querySelector('.setup-open-icon');
var setupOverlay = document.querySelector('.overlay');

var showSetupElement = function (e) {
  setupOverlay.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHadler);
  setupOpenBtn.setAttribute('aria-pressed', 'true');
};

var hideSetupElement = function (e) {
  setupOverlay.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHadler);
  closeBtn.setAttribute('aria-pressed', 'true');
};

var setupKeydownHadler = function (e) {
  if (window.utils.isDeactivateEvent(e)) {
    setupOverlay.classList.add('invisible');
    setupOpenBtn.setAttribute('aria-pressed', 'false');
  }
};

var focusOpenButton = function () {
  setupOpenBtn.focus();
};

var onSetupKeydown = function (e) {
  if (window.utils.isActivateEvent(e)) {
    showSetupElement(e);
  }
};

setupOpenBtn.addEventListener('click', function (e) {
  showSetupElement(e);
});

setupOpenBtn.addEventListener('keydown', onSetupKeydown);
focusOpenButton();


// Закрытие окна настройки персонажа.
var closeBtn = setupOverlay.querySelector('.setup-close');

closeBtn.addEventListener('click', function (e) {
  hideSetupElement(e);
});

closeBtn.addEventListener('keydown', function (e) {
  if (window.utils.isActivateEvent(e)) {
    hideSetupElement(e);
    focusOpenButton();
  }
});

//  Валидация ввода имени персонажа.
var setupUser = document.querySelector('.setup-user');
var wizardNameInput = setupUser.querySelector('.setup-user-name');
var saveBtn = document.querySelector('.setup-submit');
saveBtn.style.left = '20px';
saveBtn.style.transform = 'none';

wizardNameInput.addEventListener('click', function (e) {
  wizardNameInput.value = '';
  wizardNameInput.placeholder = 'Введите имя мага';
});

saveBtn.addEventListener('click', function (e) {
  wizardNameInput.required = true;
  if (wizardNameInput.value.length > 50) {
    e.preventDefault();
    wizardNameInput.value = '';
    wizardNameInput.placeholder = 'Max 50 символов!';
  }
  saveBtn.setAttribute('aria-pressed', 'true');
});

var wizardAppearance = document.querySelector('.setup-wizard-appearance');
var wizardCoatColor = wizardAppearance.querySelector('#wizard-coat');
var wizardCoatColorSamples = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizardEyesColorSamples = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardEyesColor = wizardAppearance.querySelector('#wizard-eyes');

var fireballColor = document.querySelector('.setup-fireball-wrap');
var fireballColorSample = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var reColorFill = function (element, newColor, url) {
  element.style['fill'] = newColor;
  setTimeout(function () {
    window.load(url, window.onLoad);
  }, 5000);
};

var reColorBg = function (element, newColor, url) {
  element.style['background'] = newColor;
  setTimeout(function () {
    window.load(url, window.onLoad);
  }, 5000);
};

window.colorizeElement(wizardCoatColor, wizardCoatColorSamples, reColorFill);

window.colorizeElement(wizardEyesColor, wizardEyesColorSamples, reColorFill);

window.colorizeElement(fireballColor, fireballColorSample, reColorBg);

var wizardsContainer = document.createElement('div');
wizardsContainer.className = 'setup-similar';
wizardsContainer.style.width = '590px';
wizardsContainer.style.height = '110px';
wizardsContainer.style.transform = 'translate(160px, 400px)';
wizardsContainer.style.display = 'flex';
wizardsContainer.style.justifyContent = 'space-around';
wizardsContainer.style.alignItems = 'flex-end';

setup.appendChild(wizardsContainer);

window.onLoad = (function () {
  return function (e) {

    var errorHandler = function (err) {
      wizardsContainer.innerHTML = err;
    };

    if (e.target.status === 200) {
      var wizards = e.target.response;
      wizardsContainer.innerHTML = '';
      getDifferentWizards(wizards).forEach(function (wizard) {
        wizardsContainer.appendChild(window.renderWizard(wizard));
      });
    }
    else if (e.target.status >= 400) {
      errorHandler('Error. Server returned status: ' + e.target.status);
    }

  };
})();

var getDifferentWizards = function (arr) {
  var newArr = [];
  var wizardsAmount = 5;

  for (var i = 0; i < wizardsAmount; i++) {
    var randomItem = window.utils.getRandomElement(arr);
    newArr.push(randomItem);
  }

  return newArr;
};

window.load(URL_DATA, window.onLoad);
