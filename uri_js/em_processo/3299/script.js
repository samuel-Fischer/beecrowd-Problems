const input = require('fs').readFileSync('stdin', 'utf8');
const resposta = input.split('\n')
let lines = input.split('');
let valor = 0

for (let i = 0; i < lines.length; i++) {
  if (lines[i] == 1 && lines[i+1] == 3) {
    valor++
  }
}

if (valor == 0) {
  console.log(resposta + " NO es de Mala Suerte");
} else {
  console.log(resposta + " es de Mala Suerte");
}