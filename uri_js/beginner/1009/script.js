const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let vendedor = lines.shift()
let salario = +(lines.shift())
let comissao = +(lines.shift())
let salarioFinal = salario + (comissao * 0.15)

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`)