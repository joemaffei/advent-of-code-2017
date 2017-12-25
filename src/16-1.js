const input = require('./16-parser');

var programs = Array.apply(null, { length: 16 }).map(Number.call, Number).map(x => String.fromCharCode(x + 97));

const danceMoves = {

  s: function spin(x) {
    return this.slice(-x).concat(this.slice(0, this.length - x));
  },

  x: function exchange(a, b) {
    var temp = [...this];
    var t = temp[+b];
    temp[+b] = temp[+a];
    temp[+a] = t;
    return temp;
  },

  p: function partner(a, b) {
    var indexA = this.indexOf(a);
    var indexB = this.indexOf(b);
    return danceMoves.x.call(this, indexA, indexB);
  }
}

var result = input.reduce((state, x) => danceMoves[x.command].apply(state, x.arguments), programs).join('');

console.log(result);