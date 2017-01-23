'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура, вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);

  var max = times[0];

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];
    var height = step * time;

    ctx.fillStyle = name === 'Вы' ? '#FF0000' : 'rgb(0, 0, ' + Math.round(80 + Math.random() * (255 - 80)) + ')';
    ctx.fillRect(histoX + columnIndent * i, 245 - height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 240 - height);
    ctx.fillText(name, histoX + columnIndent * i, 260);
  }
};
