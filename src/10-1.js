const inputLengths = require('./10-parser');
var input = Array.apply(null, { length: 256 }).map(Number.call, Number);

// circular array functions
input.at = function (index) {
  return this[index % this.length]
}

input.setAt = function (index, value) {
  this[index % this.length] = value;
}

input.subset = function (start, length) {
  var arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(this.at(start + i));
  }
  return arr;
}

input.mergeAt = function (index, array) {
  for (let i = 0; i < array.length; i++) {
    this.setAt(index + i, array[i]);
  }
}


var currentPosition = 0;

inputLengths.forEach((inputLength, skip) => {
  var temp = input.subset(currentPosition, inputLength).reverse();
  input.mergeAt(currentPosition, temp);
  currentPosition += inputLength + skip;
});

var result = input[0] * input[1];

console.log(result);