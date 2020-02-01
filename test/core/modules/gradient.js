const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/flower'),
  options = {
    gradientType: 'circular'
  };

let benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/gradient-benchmark.png');

testModule('gradient', options, benchmark, image);