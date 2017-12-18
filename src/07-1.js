const input = require('./07-parser'); input

const parents = input.filter(tower => Array.isArray(tower.children));

const allChildren = parents.reduce((result, current) => result.concat(current.children), []);

const allTowers = input.map(tower => tower.name);

const bottomProgram = allTowers.filter(tower => !allChildren.includes(tower));

console.log(bottomProgram);