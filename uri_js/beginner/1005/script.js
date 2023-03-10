const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y] = input.split('\n');

console.log(`MEDIA = ${((x*3.5+y*7.5)/11).toFixed(5)}`);