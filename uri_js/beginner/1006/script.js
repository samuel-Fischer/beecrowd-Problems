const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y , z] = input.split('\n');

console.log(`MEDIA = ${((x*2+y*3+z*5)/10).toFixed(1)}`);