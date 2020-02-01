const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/ndvi-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/ndvi-benchmark1.png'),
  image = require('../images/IS-QR'),
  options = {
    filter: 'blue'
  },
  _options = {
    filter: 'red'
  };

require('../templates/options-test')('ndvi', [options, _options], [benchmark, _benchmark], image);

testModule('ndvi', options, benchmark, image);