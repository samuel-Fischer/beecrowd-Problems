const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

for (let i=0; i<lines.length; i++) {
  let [x , y] = lines[i].split(':')
  let resposta = 0
  if (x == 7) {
    if (y)
    resposta = +y
  } else if (x == 8) {
    resposta = +y + 60
  } else if (x == 9) {
    resposta = 120
  } else {
    resposta = 0
  }
  console.log("Atraso maximo: "+resposta)
}