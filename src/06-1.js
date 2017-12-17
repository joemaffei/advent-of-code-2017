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

var history = []; history
var state = [...input]; state
var cycles = 0;
var flag = true;

while (flag) {
  cycles++;
  state = [...reallocate(state)];
  if (history.includes(JSON.stringify(state))) {
    flag = false;
  } else {
    history.push(JSON.stringify(state));
  }
}

console.log(cycles);