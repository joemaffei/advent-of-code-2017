const data = require('./load')('05');

module.exports = data.split(/\r*\n/g).map(x => +x);