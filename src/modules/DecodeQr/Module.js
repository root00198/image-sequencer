/*
 * Decodes QR from a given image.
 */
module.exports = function DoNothing(options, UI) {

  var output;
  var jsQR = require('jsqr');

  // This function is called everytime a step has to be redrawn
  function draw(input, callback, progressObj) {

    progressObj.stop(true);
    progressObj.overrideFlag = true;

    var step = this;

    function extraManipulation(pixels){
      var w = pixels.shape[0];
      var h = pixels.shape[1];
      var decoded = jsQR(pixels.data, w, h);
      if (options.step.inBrowser && options.step.ui) options.step.qrval += (decoded) ? decoded.data : 'undefined';
      return pixels;
    }
    function output(image, datauri, mimetype, wasmSuccess) {
      step.output = { src: datauri, format: mimetype, wasmSuccess, useWasm: options.useWasm };
    }
    
    return require('../_nomodule/PixelManipulation.js')(input, {
      output: output,
      ui: options.step.ui,
      format: input.format,
      image: options.image,
      inBrowser: options.inBrowser,
      callback: callback,
      useWasm:options.useWasm,
      extraManipulation: extraManipulation
    });

  }

  return {
    options: options,
    draw: draw,
    output: output,
    UI: UI
  };
};
