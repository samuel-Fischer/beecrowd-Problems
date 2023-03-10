const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

for (let i = 0; i <= lines.length; i++) {
  if (lines[i] == 'esquerda') {
    console.log("ingles");
  } else if (lines[i] == 'direita') {
    console.log("frances");
  } else if (lines[i] == 'nenhuma') {
    console.log("portugues");
  } else if (lines[i] == 'as duas') {
    console.log("caiu");
  };
};