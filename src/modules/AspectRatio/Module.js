/*
* Crops an Image on the basic of the aspect ratio
*/
module.exports = function AspectRatio(options, UI) {

  var defaults = require('./../../util/getDefaults.js')(require('./info.json'));
  var output;

  function draw(input, callback, progressObj) {

    var step = this;
    var startingX = Number(options.startingX || defaults.startingX);
    var startingY = Number(options.startingY || defaults.startingY);
    var aspectRatio = (options.aspectRatio || defaults.aspectRatio).split(':');
    var widthRatio = Number(aspectRatio[0]);
    var heightRatio = Number(aspectRatio[1]);

    progressObj.stop(true);
    progressObj.overrideFlag = true;

    var getPixels = require('get-pixels');
    getPixels(input.src, function(err, pixels) {
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
      require('../Crop/Crop.js')(input, {'x': startingX, 'y': startingY, 'w': endX - startingX, 'h': endY - startingY}, function (out, format) {

        // This output is accessible to Image Sequencer
        step.output = {
          src: out,
          format: format
        };
  
        // Tell Image Sequencer that step has been drawn
        callback();
  
      });
    });

    function output(image, datauri, mimetype, wasmSuccess) {
      step.output = { src: datauri, format: mimetype, wasmSuccess, useWasm: options.useWasm };
    }
    return;
  }
  return {
    options: options,
    draw: draw,
    output: output,
    UI: UI
  };
};
