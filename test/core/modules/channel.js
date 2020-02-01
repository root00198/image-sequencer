const path = require('path'),
  benchmark = path.resolve(__dirname + '/../images/modules-test-benchmarks/channel-benchmark.png'),
  testModule = require('../templates/module-test'),
  optionsTest = require('../templates/options-test'),
  benchmark1 = path.resolve(__dirname + '/../images/modules-test-benchmarks/channel-benchmark1.png'),
  benchmark2 = path.resolve(__dirname + '/../images/modules-test-benchmarks/channel-benchmark2.png');

testModule('channel', {channel: 'red'}, benchmark);

optionsTest('channel', [{channel: 'green'}, {channel: 'red'}], [benchmark1, benchmark2]);