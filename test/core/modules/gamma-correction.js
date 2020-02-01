const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  options = {
    adjustment: 0.6
  },
  _options = {
    adjustment: 3.5
  },
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/gamma-correction-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/gamma-correction-benchmark1.png');

require('../templates/options-test')('gamma-correction', [options, _options], [benchmark, _benchmark], image);

testModule('gamma-correction', options, benchmark, image);