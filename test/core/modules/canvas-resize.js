const path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/canvas-resize-benchmark.png'),
  testModule = require('../templates/module-test');

testModule('canvas-resize', {width: 500, height: 500}, benchmark);