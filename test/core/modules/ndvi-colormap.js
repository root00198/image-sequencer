const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/ndvi-colormap-benchmark.png');

testModule('ndvi-colormap', {}, benchmark, image);