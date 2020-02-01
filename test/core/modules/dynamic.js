const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  options = {
    red: 'r * 2',
    blue: 'b * 2',
    green: 'g * 3'
  },
  _options = {
    red: 'r / 2',
    blue: 'b',
    green: 'g'
  },
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/dynamic-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/dynamic-benchmark1.png');

require('../templates/options-test')('dynamic', [options, _options], [benchmark, _benchmark], image);

testModule('dynamic', options, benchmark, image);