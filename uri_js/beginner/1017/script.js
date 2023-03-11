const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const horas = +lines[0]
const velocidade = +lines[1]

console.log((horas * velocidade / 12).toFixed(3))