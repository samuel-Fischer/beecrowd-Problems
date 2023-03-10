const input = require('fs').readFileSync('stdin', 'utf8');
let [x, y] = input.split('\n');

resultado = +x / +y,

console.log(`${resultado.toFixed(3)} km/l`);