const fs = require('fs');


module.exports = function load(fileName) {

  return fs.readFileSync(fileName, 'utf8');
  
}