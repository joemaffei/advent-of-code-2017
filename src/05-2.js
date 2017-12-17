const input = require('./05-parser');

var steps = 0;
var index = 0;
var currentStep;

while (index <= input.length && index >= 0) {
  steps++;
  currentStep = input[index];
  if (currentStep >= 3) {
    input[index]--
  } else {
    input[index]++
  }
  index += currentStep;
}

var result = steps - 1;

console.log(result);