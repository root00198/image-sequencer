const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/color-temperature.gif');

testModule('color-temperature', {temperature:7000}, benchmark, gif, 'gif');