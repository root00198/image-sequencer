const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/grid-overlay-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/grid-overlay-benchmark1.png'),
  option = {x: 1},
  _options = {x: 1, y: 1};

require('../templates/options-test')('grid-overlay', [option, _options], [benchmark, _benchmark]);

testModule('grid-overlay', {x: 1}, benchmark);