const data = require('./load')('10');

module.exports = data.split(/,/g).map(x => +x);