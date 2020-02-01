const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  options = {rotate: 45},
  _options = {rotate: 90},
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/rotate-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/rotate-benchmark1.png');

require('../templates/options-test')('rotate', [options, _options], [benchmark, _benchmark], image);

testModule('rotate', options, benchmark, image);