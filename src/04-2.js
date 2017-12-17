const input = require('./04-parser');

var result = input.reduce((counter, line) => {
  const lineArray = line.split(/\s/g);
  const lineArrayWithoutRepeats = lineArray.reduce((arr, word) => {
    const sortedWord = word.split('').sort().join();
    if (!arr.includes(sortedWord)) arr.push(sortedWord);
    return arr;
  }, []);
  if (lineArray.length === lineArrayWithoutRepeats.length) counter++;
  return counter;
}, 0);

console.log(result);