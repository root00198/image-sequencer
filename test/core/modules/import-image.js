const path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/import-image-benchmark.png'),
  testModule = require('../templates/module-test');

const url = path.join(__dirname, '../images/red.png');

testModule('import-image', { url }, benchmark);
