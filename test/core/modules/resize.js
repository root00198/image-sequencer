const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/resize-benchmark.png');

testModule('resize', {resize: '129%'}, benchmark);