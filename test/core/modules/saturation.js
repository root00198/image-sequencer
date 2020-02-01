const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/saturation-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/saturation-benchmark1.png'),
  _options = {
    saturation: 0.5
  },
  options = {
    saturation: 1.2
  };

require('../templates/options-test')('saturation', [options, _options], [benchmark, _benchmark]);

testModule('saturation', options, benchmark);