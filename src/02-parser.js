const data = require('./load')('02');

const parsedData = data.split(/\r\n/g).map(row => row.split(/\t/g).map(x => +x));

module.exports = parsedData;