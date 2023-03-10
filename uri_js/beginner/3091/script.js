const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y] = input.split('\n');
parseFloat(x)
parseFloat(y)

let conta1 = +x % +y

console.log(conta1)