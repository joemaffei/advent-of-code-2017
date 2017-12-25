const data = require('./load')('15');

module.exports = data.split(/\r\n/g).map(line => +line.split(/\s/g)[4]);