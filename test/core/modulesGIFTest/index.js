const fs = require('fs');
const files = fs.readdirSync('./test/core/modulesGIFTest/');

files.forEach((f)=>{
  if(f != 'index.js')
    require('./' + f);
});