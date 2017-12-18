const input = require('./08-parser');

var reg = {};

// create registers
input.reduce((result, line) => {
  if (!result.includes(line.register)) result.push(line.register)
  return result;
}, []).forEach(register => reg[register] = 0);

var totalMaxima = 0;

// run program
input.forEach(line => {
  if (eval(`reg.${line.condition}`)) reg[line.register] += line.increment;
  var localMaxima = Math.max.apply(null, Object.values(reg));
  if (localMaxima > totalMaxima) totalMaxima = localMaxima;
});

console.log(totalMaxima);