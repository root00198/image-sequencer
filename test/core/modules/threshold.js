const path = require('path'),
  testModule = require('../templates/module-test'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/threshold-benchmark.png'),
  option = {threshold: 'Automatic Thresholding'},
  _option = {threshold: 'Manual Thresholding'},
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/threshold-benchmark1.png');

testModule('threshold', option, benchmark);
  
require('../templates/options-test')('threshold', [option, _option], [benchmark, _benchmark]);