const testModule = require('../templates/module-test'),
  ISQR = require('../images/IS-QR'),
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/invert-benchmark.png');

testModule('invert', {}, benchmark, ISQR);