const test = require('tape'),
  base64Img = require('base64-img'),
  looksSame = require('looks-same'),
  ImageSequencer = require('../../../src/ImageSequencer'),
  image = require('../images/IS-QR'),
  target = 'test_outputs',
  options = {
    offset: -1,
    x: 50
  };

let benchmark = 'data:image/png;base64,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';

let sequencer = ImageSequencer({ui: false});

test('overlay module loads correctly', t => {
  sequencer.loadImages(image);
  sequencer.addSteps('brightness');
  sequencer.addSteps('overlay', options);

  t.equal(sequencer.steps[2].options.name, 'overlay', 'overlay module is getting loaded');
  t.end();
});

test('overlay module loads with correct options', t => {
  for (const option in options) {
    t.equal(sequencer.steps[2].options[option], options[option], `Option ${option} is correct`);
  }

  t.end();
});

test('overlay module works correctly', t => {
  sequencer.run({mode: 'test'}, () => {

    let result = sequencer.steps[2].output.src;

    base64Img.imgSync(result, target, 'overlay-result');
    base64Img.imgSync(benchmark, target, 'overlay-benchmark');

    result = './test_outputs/overlay-result.png';
    benchmark = './test_outputs/overlay-benchmark.png';

    looksSame(result, benchmark, function(err, res) {
      if (err) console.log(err);

      t.equal(res.equal, true, 'overlay module works correctly');
      sequencer = null;
      t.end();
    });
  });
});