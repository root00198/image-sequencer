const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/ndvi.gif');

testModule('ndvi', {filter:'blue'}, benchmark, gif, 'gif');