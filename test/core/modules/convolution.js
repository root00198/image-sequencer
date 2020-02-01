const path = require('path'),
  testModule = require('../templates/module-test'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/convolution-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/convolution-benchmark1.png'),
  options = {
    constantFactor: 0.4,
    kernelValues: '1 0 1 0 1 0 1 0 1'
  },
  _options = {
    constantFactor: 0.2,
    kernelValues: '0 0 1 0 1 0 1 0 0'
  },
  optionChange = require('../templates/options-test');

testModule('convolution', options, benchmark);

optionChange('convolution', [options, _options], [benchmark, _benchmark]);