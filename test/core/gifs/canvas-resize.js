const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/canvas-resize.gif');

testModule('canvas-resize', {width:500, height:500, x:250, y:250}, benchmark, gif, 'gif');