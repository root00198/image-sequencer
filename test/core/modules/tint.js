const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR'),
  options = {
    color: 'rgb(30,40,190)',
    factor: 0.6
  },
  option = {
    factor: 0.5
  },
  _option = {
    factor: 0.7
  },
  benchmark1 = path.resolve(__dirname + '/../images/modules-test-benchmarks/tint-benchmark1.png'),
  benchmark2 = path.resolve(__dirname + '/../images/modules-test-benchmarks/tint-benchmark2.png'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/tint-benchmark.png');

testModule('tint', options, benchmark, image);

require('../templates/options-test')('tint', [option, _option], [benchmark1, benchmark2]);