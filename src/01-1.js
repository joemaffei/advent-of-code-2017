const data = require('./load')('01');

const dataArray = data.split('').map(x => +x);

const total = dataArray.reduce((result, current, index) => {
  const next = dataArray[(index + 1) % dataArray.length];
  return current === next
    ? result + current
    : result;
}, 0);

console.log(total);