const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/gamma-correction.gif');

testModule('gamma-correction', {adjustment:2}, benchmark, gif, 'gif');