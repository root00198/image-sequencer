const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/edge-detect-benchmark.png'),
  image = require('../images/IS-QR'),
  options = {
    blur: 1.8,
    highThresholdRatio: 0.18,
    lowThresholdRatio: 0.16
  };

testModule('edge-detect', options, benchmark, image);