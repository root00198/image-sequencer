const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/exposure-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/exposure-benchmark1.png'),
  image = require('../images/IS-QR'),
  options = {
    exposure: 3
  },
  _options = {
    exposure: 4
  };

require('../templates/options-test')('exposure', [options, _options], [benchmark, _benchmark], image);

testModule('exposure', options, benchmark, image);