const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');
let conta = 3.14159 * (parseFloat(lines)**2); // "parseFloat()" é usado para ignorar caracteres ou espaços em branco de uma linha

console.log("A="+conta.toFixed(4));