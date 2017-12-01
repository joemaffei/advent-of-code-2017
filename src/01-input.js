const data = require('./load')('01');

module.exports = data.split('').map(x => +x);
