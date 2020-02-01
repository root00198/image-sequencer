const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/flip-image.gif');

testModule('flip-image', {Axis:'Horizontal'}, benchmark, gif, 'gif');