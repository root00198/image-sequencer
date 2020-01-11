const pixelManipulation = require('../_nomodule/PixelManipulation');
/*
* Crops an Image on the basic of the aspect ratio
*/
module.exports = function AspectRatio(options, UI) {

  var defaults = require('./../../util/getDefaults.js')(require('./info.json'));
  var output;

  function draw(input, callback) {

    var step = this;
    var startingX = Number(options.startingX || defaults.startingX);
    var startingY = Number(options.startingY || defaults.startingY);
    var aspectRatio = (options.aspectRatio || defaults.aspectRatio).split(':');
    var widthRatio = Number(aspectRatio[0]);
    var heightRatio = Number(aspectRatio[1]);

    function extraManipulation(pixels) {
      var width = pixels.shape[0];
      var height = pixels.shape[1];
      var endX, endY;
      if(((width - startingX) / widthRatio) * heightRatio <= (height - startingY)) {
        endX = width;
        endY = (((width - startingX) / widthRatio) * heightRatio) + startingY;
      }
      else {
        endX = (((height - startingY) / heightRatio) * widthRatio) + startingX;
        endY = height;
      }
      const newPixels = require('../Crop/Crop')(pixels, {'x': startingX, 'y': startingY, 'w': endX - startingX, 'h': endY - startingY}, function() {
      });
      return newPixels;
    }


    function output(image, datauri, mimetype, wasmSuccess) {
      step.output = { src: datauri, format: mimetype, wasmSuccess, useWasm: options.useWasm };
    }
    return pixelManipulation(input, {
      output: output,
      ui: options.step.ui,
      extraManipulation: extraManipulation,
      format: input.format,
      image: options.image,
      inBrowser: options.inBrowser,
      callback: callback,
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
