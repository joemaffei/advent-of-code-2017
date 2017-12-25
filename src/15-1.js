const input = require('./15-parser');

var factors = [16807, 48271];
var iterations = 40000000;
var currentPair = input;
var previousPair;
var test;
var matches = 0;

while (iterations) {

  previousPair = currentPair;
  currentPair = previousPair.map((x, i) => (x * factors[i] % 2147483647));

  test = currentPair.map(x => x.toString(2).slice(-16));

  if (test[0] === test[1]) matches++;

  if (iterations % 1000000 === 0) console.log(`${iterations} iterations remaining`);

  iterations--;
  
}

console.log(matches);