const path = require('path'),
  testModule = require('../templates/module-test'),
  image = require('../images/IS-QR');
options = {
  'replaceMethod': 'replaceByColor',
  'replaceColor':'rgb(0,0,255)',
  'color': 'rgb(255,255,255)',
  'tolerance': '50'
},
_options = {
  'replaceMethod': 'greyscale',
  'replaceColor':'rgb(194,18,18)',
  'color': 'rgb(74,154,186)',
  'tolerance': '50'
},
_benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/replace-color-benchmark1.png'),
benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/replace-color-benchmark.png');

require('../templates/options-test')('replace-color', [options, _options], [benchmark, _benchmark], image);

testModule('replace-color', options, benchmark, image);