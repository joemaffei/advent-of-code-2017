const input = require('./07-parser');

const parents = input.filter(tower => Array.isArray(tower.children));

const getTowerByName = (name) => {
  return input.filter(tower => tower.name === name)[0];
}