const input = require('./15-parser');

var factors = [16807, 48271];
var iterations = 5000000;
var currentPair = input;
var previousPair;
var test;
var parity;
var isValid;
var temp;
var matches = 0;

while (iterations) {

  previousPair = currentPair;
  currentPair = previousPair.map((x, i) => {
    parity = i * 4 + 4;
    temp = x * factors[i] % 2147483647;
    isValid = temp % parity === 0;
    while (!isValid) {
      temp = temp * factors[i] % 2147483647;
      isValid = temp % parity === 0;
    }
    return temp;
  });
  
  test = currentPair.map(x => x.toString(2).slice(-16));

  if (test[0] === test[1]) matches++;

  if (iterations % 100000 === 0) console.log(`${iterations} iterations remaining`);

  iterations--;
  
}

console.log(matches);