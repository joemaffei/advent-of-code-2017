const input = require('./06-parser');

const reallocate = (arr) => {
  const maxima = Math.max.apply(null, arr);
  const indexOfHighestBlock = arr.indexOf(maxima);
  let result = [...arr];

  result[indexOfHighestBlock] = 0;

  for (let i = 1; i <= maxima; i++) {
    let index = (indexOfHighestBlock + i) % arr.length;
    result[index] += 1;
  }

  return result;
}

var history = [];
var state = [...input];
var flag = true;
var loopSize;
var stateString;

while (flag) {
  state = [...reallocate(state)];
  stateString = JSON.stringify(state);
  if (history.includes(stateString)) {
    flag = false;
    loopSize = history.length - history.indexOf(stateString);
  } else {
    history.push(stateString);
  }
}

console.log(loopSize);