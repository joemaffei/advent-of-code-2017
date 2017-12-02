const input = require('./02-parser');

const minima = arr => arr.reduce((acc, cur) => cur < acc ? cur : acc, arr[0]);

const maxima = arr => arr.reduce((acc, cur) => cur > acc ? cur : acc, arr[0]);

const result = input.reduce((acc, row) => acc += maxima(row) - minima(row), 0);

console.log(result);