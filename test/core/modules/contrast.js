const benchmark = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAAsSURBVKXBAQEAMAiAME5Dgz6jhmB7f2YJJJJIIokkkkgiiSSSSCKJJJJIogOcOQJuFks/jgAAAABJRU5ErkJggg==',
  testModule = require('../templates/module-test');

testModule('contrast', {contrast: -40}, benchmark);