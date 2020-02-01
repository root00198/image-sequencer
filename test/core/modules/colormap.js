const path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/colormap-benchmark.png'),
  testModule = require('../templates/module-test');

testModule('colormap', { colormap: 'blutoredjet' }, benchmark);

const optionsTestModule = require('../templates/options-test');

const benchmarks = [
    path.resolve(__dirname + '/../images/modules-test-benchmarks/colormap-benchmark1.png'),
    path.resolve(__dirname + '/../images/modules-test-benchmarks/colormap-benchmark2.png')
  ],
  options = [{ colormap: 'default' }, { colormap: 'greyscale' }];

optionsTestModule('colormap', options, benchmarks);
