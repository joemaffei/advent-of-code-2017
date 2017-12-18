const data = require('./load')('08');

module.exports = data.split(/\r*\n+/g).map(line => {
  let l = line.split(/\s/g);
  return {
    register: l[0],
    increment: l[1] === 'dec' ? -+l[2] : +l[2],
    condition: l[4]+l[5]+l[6]
  }
});