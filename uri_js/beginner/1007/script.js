const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y , z , a] = input.split('\n');

console.log(`DIFERENCA = ${x*y-z*a}`);