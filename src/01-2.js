const input = require('./01-parser');

const total = input.reduce((result, current, index) => {
  const length = input.length;
  const next = input[(index + length / 2) % length];
  return current === next
    ? result + current
    : result;
}, 0);

console.log(total);