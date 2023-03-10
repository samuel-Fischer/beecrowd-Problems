const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const n1 = +lines[0];
const n2 = +lines[1];

console.log(`SOMA = ${n1 + n2}`);