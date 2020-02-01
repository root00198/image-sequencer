const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/flip-image-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/flip-image-benchmark1.png'),
  options = {
    Axis: 'horizontal'
  },
  _options = {
    Axis: 'vertical'
  };

require('../templates/options-test')('flip-image', [options, _options], [benchmark, _benchmark], image);

testModule('flip-image', options, benchmark, image);