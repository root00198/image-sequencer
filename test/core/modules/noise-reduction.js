const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/noise-reduction-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/noise-reduction-benchmark1.png'),
  option = {method: 'Median Filtering'},
  _option = {method: 'Mean Filtering'};

require('../templates/options-test')('noise-reduction', [option, _option], [benchmark, _benchmark]);

testModule('noise-reduction', option, benchmark);
