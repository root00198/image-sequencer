const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/saturation.gif');

testModule('saturation', {saturation:1.5}, benchmark, gif, 'gif');