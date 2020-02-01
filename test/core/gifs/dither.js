const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/dither.gif');

testModule('dither', {dither:'floydsteinberg'}, benchmark, gif, 'gif');
