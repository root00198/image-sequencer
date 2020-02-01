const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/dither-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/dither-benchmark1.png'),
  option = {dither: 'floydsteinberg'},
  _options = {dither: 'bayer'};
require('../templates/options-test')('dither', [option, _options], [benchmark, _benchmark]);

testModule('dither', {dither: 'floydsteinberg'}, benchmark);