const testModule = require('../templates/module-test'),
  benchmark = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAklEQVR4AewaftIAAAA0SURBVKXBgQ3AIAzAsCzi/4tRBzcQ+9vwEywueTOARBJJJJFEEkkkkUQSSSSRRItreDPAASaMBRte3J1IAAAAAElFTkSuQmCC';

testModule('noise-reduction', {method: 'Median Filtering'}, benchmark);
