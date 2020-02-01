const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/replace-color.gif');

testModule('replace-color', {tolerance:100}, benchmark, gif, 'gif');