const testModule = require('../templates/module-test'),
  options = {
    temperature: 20000
  },
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/color-temperature-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/color-temperature-benchmark1.png'),
  optionsTest = require('../templates/options-test');

testModule('color-temperature', options, benchmark);

optionsTest('color-temperature', [options, {temperature: 60}], [benchmark, _benchmark]);