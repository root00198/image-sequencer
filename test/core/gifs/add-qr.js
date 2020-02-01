const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/gifs-test-benchmarks/add-qr.gif');

testModule('add-qr', {size:200, qrCodeString:'https://github.com/publiclab/image-sequencer'}, benchmark, gif, 'gif');