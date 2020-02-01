const testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  options = {size:200, qrCodeString:'https://github.com/publiclab/image-sequencer'},
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/add-qr-benchmark.png');

testModule('add-qr', options, benchmark, image);