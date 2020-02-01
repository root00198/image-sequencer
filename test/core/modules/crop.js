const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/crop-benchmark.png'),
  options = {
    x: '25%',
    y: '15',
    w: '35%',
    h: '45'
  };

testModule('crop', options, benchmark, image);