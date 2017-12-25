const data = require('./load')('16');

module.exports = data.split(/,/g).map(x => {
  return {
    command: x.substr(0, 1),
    arguments: x.substr(1).split('/')
  }
});