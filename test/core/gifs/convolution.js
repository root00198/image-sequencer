const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/convolution.gif');

testModule('convolution', {constantFactor:1.005}, benchmark, gif, 'gif');