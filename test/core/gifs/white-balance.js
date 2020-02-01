const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/white-balance.gif');

testModule('white-balance', {red:125, green:234, blue:67}, benchmark, gif, 'gif');
