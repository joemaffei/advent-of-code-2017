const input = require('./07-parser');

const parents = input.filter(obj => Array.isArray(obj.children));

const allChildren = parents.reduce((result, current) => result.concat(current.children), []);

const allTowers = input.map(tower => tower.name);

const bottomProgram = allTowers.filter(tower => !allChildren.includes(tower));

console.log(bottomProgram);