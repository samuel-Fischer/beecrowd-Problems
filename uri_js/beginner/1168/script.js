const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n')
const num1 = lines.shift();
let resposta = 0

for (let i = 0; i < num1; i++) {
  let numeros = lines[i].split('')
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == 1) {
      resposta = resposta + 2
    } else if (numeros[i] == 2) {
      resposta = resposta + 5
    } else if (numeros[i] == 3) {
      resposta = resposta + 5
    } else if (numeros[i] == 4) {
      resposta = resposta + 4
    } else if (numeros[i] == 5) {
      resposta = resposta + 5
    } else if (numeros[i] == 6) {
      resposta = resposta + 6
    } else if (numeros[i] == 7) {
      resposta = resposta + 3
    } else if (numeros[i] == 8) {
      resposta = resposta + 7
    } else if (numeros[i] == 9) {
      resposta = resposta + 6
    } else if (numeros[i] == 0) {
      resposta = resposta + 6
    }
  }
  console.log(resposta + " leds")
  resposta = 0
}