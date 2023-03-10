const input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
const palavra = lines.shift()

if (palavra.length >= 10) {
  console.log("palavrao")
} else {
  console.log("palavrinha")
}