const path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/brightness-benchmark.png'),
  benchmark1 = path.resolve(__dirname + '/../images/modules-test-benchmarks/brightness-benchmark1.png'),
  benchmark2 = path.resolve(__dirname + '/../images/modules-test-benchmarks/brightness-benchmark2.png'),
  testModule = require('../templates/module-test'),
  optionsTest = require('../templates/options-test');

testModule('brightness', {brightness: 1}, benchmark);

optionsTest('brightness', [{brightness: 175}, {brightness: 30}], [benchmark1, benchmark2]);