const benchmark = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAApSURBVKXBAQEAAAiDMKR/5xuC7YQRSCSRRBJJJJFEEkkkkUQSSSSRRA9VXgEhIFagFgAAAABJRU5ErkJggg==',
  testModule = require('../templates/module-test');

testModule('brightness', {brightness: 1}, benchmark);