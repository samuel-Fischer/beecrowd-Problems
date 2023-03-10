const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y] = input.split('\n');
const resultado = +x + +y;

console.log("X = " + resultado);