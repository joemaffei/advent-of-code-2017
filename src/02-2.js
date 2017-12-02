const input = require('./02-parser');

const result = input.reduce((acc, row) => {

  const rowPairs = []
  row.forEach(y => row.forEach(x => x !== y && rowPairs.push([y, x])))

  const zz = rowPairs.filter(x => (x[0] % x[1] === 0) || (x[1] % x[0] === 0)).filter(x => x[0] > x[1])[0]

  return acc + (zz[0] / zz[1])

}, 0)

console.log(result);