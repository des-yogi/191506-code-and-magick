'use strict';

// Открытие окна настройки персонажа.
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

// Изменение цвета мантии персонажа по нажатию.
var wizardAppearance = document.querySelector('.setup-wizard-appearance');
var wizardCoatColor = wizardAppearance.querySelector('#wizard-coat');
var wizardCoatColorSamples = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

window.colorizeElement(wizardCoatColor, wizardCoatColorSamples, 'fill');

// Изменение цвета глаз персонажа по нажатию.
var wizardEyesColorSamples = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardEyesColor = wizardAppearance.querySelector('#wizard-eyes');

window.colorizeElement(wizardEyesColor, wizardEyesColorSamples, 'fill');

//  Изменение цвета фаерболов по нажатию.
var fireballColor = document.querySelector('.setup-fireball-wrap');
var fireballColorSample = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

window.colorizeElement(fireballColor, fireballColorSample, 'background');
