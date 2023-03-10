const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y] = input.split('\n');

console.log("PROD = " + x*y);