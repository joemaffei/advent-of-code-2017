const input = require('./03-parser');

function Point(x, y, value) {
  this.x = x;
  this.y = y;
  this.value = value;
}

function Grid() {

  this.points = [];

  this.setPoint = function (x, y, value) {
    if (this.getPoint(x, y)) {
      this.points = this.points.map(point => {
        if ((point.x === x) && (point.y === y)) {
          return new Point(x, y, value)
        } else {
          return point
        }
      })
    } else {
      this.points.push(new Point(x, y, value));
    }
  }.bind(this);

  this.getPoint = function (x, y) {
    return this.points.filter(point => (point.x === x) && (point.y === y))[0];
  }.bind(this)
}

var grid = new Grid();
grid.setPoint(0, 0, 1);
var latest = 1;
var level = 1;
var dx = 0;
var dy = -1;
var x = 1;
var y = 0;

while (latest < input) {
  var neighbor = [];

  // get neighbors
  neighbor[0] = grid.getPoint(x - 1, y - 1) ? grid.getPoint(x - 1, y - 1).value : 0;
  neighbor[1] = grid.getPoint(x - 0, y - 1) ? grid.getPoint(x - 0, y - 1).value : 0;
  neighbor[2] = grid.getPoint(x + 1, y - 1) ? grid.getPoint(x + 1, y - 1).value : 0;
  neighbor[3] = grid.getPoint(x - 1, y - 0) ? grid.getPoint(x - 1, y - 0).value : 0;
  neighbor[4] = grid.getPoint(x + 1, y - 0) ? grid.getPoint(x + 1, y - 0).value : 0;
  neighbor[5] = grid.getPoint(x - 1, y + 1) ? grid.getPoint(x - 1, y + 1).value : 0;
  neighbor[6] = grid.getPoint(x - 0, y + 1) ? grid.getPoint(x - 0, y + 1).value : 0;
  neighbor[7] = grid.getPoint(x + 1, y + 1) ? grid.getPoint(x + 1, y + 1).value : 0;

  // total neighbors
  latest = neighbor.reduce((total, value) => total + value, 0);

  // set new point
  grid.setPoint(x, y, latest);

  // define next move
  if (x === level && y === level) {
    level++;
    x = level;
    y = x - 1;
    dx = 0;
    dy = -1;
  } else if (x === level && y === -level) {
    dx = -1; dy = 0; x += dx; y += dy;
  } else if (x === -level && y === -level) {
    dx = 0; dy = 1; x += dx; y += dy;
  } else if (x === -level && y === level) {
    dx = 1; dy = 0; x += dx; y += dy;
  } else {
    x += dx; y += dy;
  }
}

console.log(latest);