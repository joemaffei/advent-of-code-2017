const data = require('./load')('01');

const dataArray = data.split('').map(x => +x);

const total = dataArray.reduce((result, current, index) => {
  return current === dataArray[(index + 1) % dataArray.length] ? result + current : result;
}, 0);

console.log(total);