const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  options = {
    startingX: 2,
    endX: 60,
    startingY: 2,
    endY: 60,
    color: 'rgba(255,0,0,0)',
    thickness: 6
  },
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/draw-rectangle-benchmark.png');

testModule('draw-rectangle', options, benchmark, image);