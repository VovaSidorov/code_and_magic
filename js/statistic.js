
// Вертикальный вывод списка
// var CLOUD_WIDTH=420;
// var CLOUD_HEIGHT=270;
// var CLOUD_X=100;
// var CLOUD_Y=50;
// var GAP=50;
// var GAP_TEXT_X=130;
// var GAP_TEXT_Y=20;
// var FONT_GAP=15;
// var TEXT_WIDTH=50;
// var BAR_HEIGHT=20;
// var SPACE_BETWEEN = 10;
// var barWidth=CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
//
// var renderCloud = function (ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };
//
// var getMaxElement = function(arr){
//   var maxElement = arr[0];
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]>maxElement){
//       maxElement=arr[i];
//     }
//   }
//   return maxElement;
// };
//
// window.renderStatistics = function (ctx, players, times) {
//   renderCloud(ctx,CLOUD_X + GAP,CLOUD_Y + GAP,'rgba(0,0,0,0.7)');
//   renderCloud(ctx,CLOUD_X,CLOUD_Y,'#fff');
//
//   ctx.fillStyle = '#000';
//   ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TEXT_X, CLOUD_Y + GAP_TEXT_Y);
//   ctx.fillText('Список результатов:', CLOUD_X + GAP_TEXT_X, CLOUD_Y + GAP_TEXT_Y + FONT_GAP);
//
//
//   var maxTime=getMaxElement(times);
//
//   for(var i=0;i<players.length;i++){
//     ctx.fillText(players[i],CLOUD_X+GAP,CLOUD_Y+GAP+FONT_GAP+(BAR_HEIGHT+GAP_TEXT_Y)*i);
//     ctx.fillRect(CLOUD_X+GAP+TEXT_WIDTH,CLOUD_Y+GAP+(BAR_HEIGHT+GAP_TEXT_Y)*i,(barWidth*times[i])/maxTime, BAR_HEIGHT);
//   }
// };

// горизонтальный вывод
var CLOUD_WIDTH=420;
var CLOUD_HEIGHT=270;
var CLOUD_X=100;
var CLOUD_Y=50;
var GAP=50;
var GAP_TEXT_X=130;
var GAP_TEXT_Y=20;
var FONT_GAP=15;
var TEXT_WIDTH=50;
var BAR_HEIGHT=20;

var barWidth=CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr){
  var maxElement = arr[0];
  for (var i=0;i<arr.length;i++){
    if (arr[i]>maxElement){
      maxElement=arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx,CLOUD_X + GAP,CLOUD_Y + GAP,'rgba(0,0,0,0.7)');
  renderCloud(ctx,CLOUD_X,CLOUD_Y,'#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TEXT_X, CLOUD_Y + GAP_TEXT_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_TEXT_X, CLOUD_Y + GAP_TEXT_Y + FONT_GAP);


  var maxTime=getMaxElement(times);

  for(var i=0;i<players.length;i++){
    ctx.fillText(players[i],CLOUD_X+GAP+(100*i),CLOUD_Y+GAP+FONT_GAP+(BAR_HEIGHT+GAP_TEXT_Y)+130);
    ctx.fillRect(CLOUD_X+GAP+(100*i),100*i,(barWidth*times[i])/maxTime, BAR_HEIGHT),;
  }
};



// 'use strict';
//
// var CLOUD_WIDTH = 420;
// var CLOUD_HEIGHT = 270;
// var CLOUD_X = 100;
// var CLOUD_Y = 10;
// var GAP = 10;
// var CLOUD_PADDING = 30;
// var LINE_HEIGHT = 20;
// var GIST_HEIGHT = 150;
// var BAR_WIDTH = 40;
// var SPACE_BETWEEN = 50;
//
// var gistBottom = CLOUD_Y + CLOUD_HEIGHT - CLOUD_PADDING;
//
// var renderCloud = function (ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };
//
// var getMaximum = function (raw) {
//   var maximum = raw[0];
//   for (var i = 1; i < raw.length; i++) {
//     if (raw[i] > maximum) {
//       maximum = raw[i];
//     }
//   }
//   return maximum;
// };
//
// window.renderStatistics = function (ctx, names, times) {
//   renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
//   renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
//
//   ctx.fillStyle = '#000';
//   ctx.font = '16px PT Mono';
//   ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING);
//   ctx.fillText('Список результатов:', CLOUD_X + CLOUD_PADDING, CLOUD_Y + CLOUD_PADDING + LINE_HEIGHT);
//   var max = getMaximum(times);
//   var colors = [];
//   for (var i = 0; i < names.length; i++) {
//     colors[i] = 'rgba(0,0,' + Math.round(Math.random() * 255) + ',1)';
//     if (names[i] === 'Вы') {
//       colors[i] = 'rgba(255, 0, 0, 1)';
//     }
//     times[i] = Math.round(times[i]);
//     ctx.fillStyle = '#000';
//     ctx.fillText(names[i], CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + SPACE_BETWEEN) * i, gistBottom + LINE_HEIGHT);
//     ctx.fillStyle = colors[i];
//     ctx.fillRect(CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + SPACE_BETWEEN) * i, gistBottom - GIST_HEIGHT * times[i] / max, BAR_WIDTH, GIST_HEIGHT * times[i] / max);
//     ctx.fillStyle = '#000';
//     ctx.fillText(times[i], CLOUD_X + CLOUD_PADDING + (BAR_WIDTH + SPACE_BETWEEN) * i, gistBottom - GIST_HEIGHT * times[i] / max - LINE_HEIGHT / 2);
//   }
// };


