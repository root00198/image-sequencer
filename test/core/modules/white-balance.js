const path = require('path'),
  testModule = require('../templates/module-test'),
  options = {'red': '240', 'green': '240', 'blue': '240'},
  _options = {'red': '255', 'green': '255', 'blue': '255'},
  _options2 = {'red': '12', 'green': '12', 'blue': '12'},
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/white-balance-benchmark.png'),
  benchmark1 = path.resolve(__dirname + '/../images/modules-test-benchmarks/white-balance-benchmark1.png'),
  benchmark2 = path.resolve(__dirname + '/../images/modules-test-benchmarks/white-balance-benchmark2.png');

require('../templates/options-test')('white-balance', [_options, _options2], [benchmark1, benchmark2]);

testModule('white-balance', options, benchmark);