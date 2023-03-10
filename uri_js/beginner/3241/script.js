const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const repeticao = lines.shift();
for (let i = 0; i < repeticao; i++) {
  const numeros = lines[i].split("+");
  
  if (numeros[0] == 'P=NP') {
    console.log('skipped');
  } else {
    console.log(+numeros[0] + +numeros[1]);
  };
};