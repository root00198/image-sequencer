const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/constrained-crop-benchmark.png'),
  image = require('../images/IS-QR'),
  options = {
    startingX : 100,
    startingY : 100,
    aspectRatio : '1:2'
  };

testModule('constrained-crop', options, benchmark, image);