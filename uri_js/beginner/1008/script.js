const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y , z] = input.split('\n');

console.log(`NUMBER = ${x}
SALARY = U$ ${(y*z).toFixed(2)}`);