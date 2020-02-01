const path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/contrast-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/contrast-benchmark1.png'),
  testModule = require('../templates/module-test'),
  optionsChange = require('../templates/options-test'),
  option = {contrast: 40},
  _option = {contrast: 84};

testModule('contrast', option, benchmark);

optionsChange('contrast', [option, _option], [benchmark, _benchmark]);