const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/grid-overlay.gif');

testModule('grid-overlay', {x:10, y:20}, benchmark, gif, 'gif');