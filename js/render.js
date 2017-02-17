'use strict';

window.renderWizard = (function () {
  var wizardTemplate = document.querySelector('.setup-wizard-wrap');

  return function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    var name = document.createElement('span');
    name.title = wizard.name;
    wizardElement.appendChild(name);
    wizardElement.style.display = 'flex';
    wizardElement.style.flexDirection = 'column-reverse';
    wizardElement.style.flexShrink = '1';

    var svgElement = wizardElement.children[0];
    svgElement.style.position = 'static';
    svgElement.style.width = 50;
    svgElement.style.height = 50;
    var elemCollection = svgElement.querySelectorAll('*');

    window.utils.changeIdToClass(elemCollection);

    svgElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    svgElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

})();
