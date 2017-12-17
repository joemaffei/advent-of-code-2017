const data = require('./load')('04');

module.exports = data.split(/\r*\n/g);