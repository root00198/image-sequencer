const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/noise-reduction.gif');

testModule('noise-reduction', {method:'Mean Filtering'}, benchmark, gif, 'gif');
