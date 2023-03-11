const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y , z] = input.split('\n');

let resultado = 0;

if (x > y && x > z) {
  resultado = (+y + +z*2)*2;
} else if (y > x && y > z) {
  resultado = (+x + +z)*2;
} else if (z > x && z > y) {
  resultado = (+x*2 + +y)*2;
} else {
  resultado = (+x + +y)*2;
}

console.log(resultado);