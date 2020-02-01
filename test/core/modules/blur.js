const path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/blur-benchmark.png'),
  moduleTest = require('../templates/module-test'),
  optionsTest = require('../templates/options-test'),
  benchmark1 = path.resolve(__dirname + '/../images/modules-test-benchmarks/blur-benchmark1.png'),
  benchmark2 = path.resolve(__dirname + '/../images/modules-test-benchmarks/blur-benchmark2.png');

moduleTest('blur', { blur: 3.25 }, benchmark);

optionsTest('blur', [{ blur: 2 }, { blur: 0.45 }], [benchmark1, benchmark2]);
