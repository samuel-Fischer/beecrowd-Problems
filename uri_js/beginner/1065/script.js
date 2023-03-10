const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let resultado = 0;
for (i = 0; i <= 4; i++) {
  let x = lines.shift();
  if (x % 2 == 0) {
    resultado++;
  };
};
console.log(`${resultado} valores pares`);