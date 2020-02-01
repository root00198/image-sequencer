const testModule = require('../templates/module-test'),
  options = {
    colormap: 'greyscale',
    x: '1',
    y: '0',
    h: '10'
  },
  path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/colorbar-benchmark.png'),
  _benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/colorbar-benchmark1.png'),
  optionsTest = require('../templates/options-test');

testModule('colorbar', options, benchmark);

optionsTest('colorbar', [options, {colormap: 'default', x: '1', y: '0', h: '10'}], [benchmark, _benchmark]);