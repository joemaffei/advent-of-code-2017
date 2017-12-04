const input = require('./03-parser');


const squareLevel = x => {
  const root = Math.ceil(Math.sqrt(x));
  return root % 2 === 0 ? root + 1 : root;
}

const lastPointCoordinates = x => {
  const sl = squareLevel(x);
  const integerHalf = Math.floor(sl / 2);
  return { x: integerHalf, y: integerHalf }
}

const squareAsObject = x => {
  var result = {};
  const sl = squareLevel(x); //= 571
  const sl2 = sl * sl;
  const upper = lastPointCoordinates(x); // { x: 285, y: 285 }
  for (var i = 0; i < sl; i++) {
    result[sl2 - i] = {
      x: upper.x - i,
      y: upper.y
    }
    result[sl2 - sl - i] = {
      x: -upper.x,
      y: upper.y - i
    }
    result[sl2 - 2 * sl - i] = {
      x: -upper.x + i,
      y: -upper.y,
    }
    result[sl2 - 3 * sl - i] = {
      x: -upper.x,
      y: -upper.y + i
    }
  }
  return result;
}

const distanceFromCenter = x => {
  const s = squareAsObject(x)[x];
  return Math.abs(s.x) + Math.abs(s.y);
}

console.log(distanceFromCenter(input));