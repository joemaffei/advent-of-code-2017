const fs = require('fs');

module.exports = day => fs.readFileSync(`data/${day}.txt`, 'utf8');