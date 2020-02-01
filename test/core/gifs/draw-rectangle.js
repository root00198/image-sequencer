const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/draw-rectangle.gif');

testModule('draw-rectangle', {endX:100, endY:100, thickness:2}, benchmark, gif, 'gif');