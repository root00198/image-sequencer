const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/crop.gif');

testModule('crop', {w:100, h:100}, benchmark, gif, 'gif');