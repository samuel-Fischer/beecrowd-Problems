const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [x, y] = lines[0].split(' ');

if (x == "1") {
  let soma = y * 4
  console.log(`Total: R$ ${soma.toFixed(2)}`)
} else if (x == "2") {
  let soma = y * 4.5
  console.log(`Total: R$ ${soma.toFixed(2)}`)
} else if (x == "3") {
  let soma = y * 5
  console.log(`Total: R$ ${soma.toFixed(2)}`)
} else if (x == "4") {
  let soma = y * 2
  console.log(`Total: R$ ${soma.toFixed(2)}`)
} else {
  let soma = y * 1.5
  console.log(`Total: R$ ${soma.toFixed(2)}`)
}