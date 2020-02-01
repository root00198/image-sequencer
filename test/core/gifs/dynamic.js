const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/dynamic.gif');

testModule('dynamic', {red:'r/2', green:'g/3', blue:'b/4'}, benchmark, gif, 'gif');