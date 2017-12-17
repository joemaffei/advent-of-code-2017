const data = require('./load')('06');

module.exports = data.split(/\t+|\s+/g).map(x => +x);