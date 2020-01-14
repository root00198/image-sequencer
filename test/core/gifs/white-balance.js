const testModule = require('../templates/gif-module-test.js'),
  gif = require('../images/test.gif.js'),
  benchmark = 'data:image/gif;base64,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';

testModule('white-balance', {red:125, green:234, blue:67}, benchmark, gif, 'gif');