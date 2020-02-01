const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/histogram-benchmark.png');

testModule('histogram', {}, benchmark);