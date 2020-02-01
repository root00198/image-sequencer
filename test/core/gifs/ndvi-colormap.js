const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/ndvi-colormap.gif');

testModule('ndvi-colormap', {filter:'blue', colormap:'greyscale'}, benchmark, gif, 'gif');