const input = require('fs').readFileSync('stdin', 'utf8');
const [x , y] = input.split('\n');

if (y.length <= x.length) {
  console.log("go");
} else {
  console.log("no");
}