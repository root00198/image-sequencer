const pixelSetter = require('../../util/pixelSetter.js'),
  pixelManipulation = require('../_nomodule/PixelManipulation');

module.exports = function Gradient(options, UI) {

  const defaults = require('./../../util/getDefaults.js')(require('./info.json'));
  var output;

  options.intensity = options.intensity || defaults.intensity;

  // The function which is called on every draw.
  function draw(input, callback) {
    var step = this;

    function output(image, datauri, mimetype, wasmSuccess) {
      step.output = { src: datauri, format: mimetype, wasmSuccess, useWasm: options.useWasm };
    }

    function extraManipulation(pixels) {
      const [w, h] = pixels.shape;
      let start, end;
      if(options.intensity === 'low')
        [start, end] = [0, 0.08];
      else if(options.intensity === 'medium')
        [start, end] = [0, 0.13];
      else
        [start, end] = [0, 0.18];

      for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
          let val = Math.random() * (end - start) + start, r, g, b;
          val *= 255;
          if(Math.round(Math.random()))
            r = Math.floor(Math.min(pixels.get(i, j, 0) + val, 255));
          else
            r = Math.floor(Math.max(pixels.get(i, j, 0) - val, 0));
          if(Math.round(Math.random()))
            g = Math.floor(Math.min(pixels.get(i, j, 1) + val, 255));
          else
            g = Math.floor(Math.max(pixels.get(i, j, 1) - val, 0));
          if(Math.round(Math.random()))
            b = Math.floor(Math.min(pixels.get(i, j, 2) + val, 255));
          else
            b = Math.floor(Math.max(pixels.get(i, j, 2) - val, 0));

          pixelSetter(i, j, [r, g, b, 255], pixels);
        }
      }

      return pixels;
    }

    return pixelManipulation(input, {
      output,
      extraManipulation,
      callback,
      format: input.format,
      image: options.image,
      inBrowser: options.inBrowser,
      useWasm:options.useWasm
    });

  }

  return {
    options: options,
    draw: draw,
    output: output,
    UI: UI
  };
};
