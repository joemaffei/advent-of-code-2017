const data = require('./load')('07');

var lines = data
  .split(/\r*\n/g)
  .map(line => line.replace(/\s/g, ''))
  .map(line => {
    var children = line.match(/->(.+)/)
    return {
      name: '' + line.match(/[a-z]+/),
      weight: +line.match(/[0-9]+/),
      children: children ? children[1].split(/,/g) : null
    }
  });