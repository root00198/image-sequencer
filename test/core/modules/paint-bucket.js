const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  options = {
    startingX: 15,
    startingY: 20,
    fillColor: 'rgba(80,180,80,255)',
    tolerance: 20
  },
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/paint-bucket-benchmark.png');

testModule('paint-bucket', options, benchmark, image);