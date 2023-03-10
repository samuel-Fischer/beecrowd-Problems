const input = require('fs').readFileSync('stdin', 'utf8');
let [x , y , z] = input.split(' ');

if (x > y && x < z || x > z && x < y) {
  console.log("huguinho");
} else if (y > x && y < z || y > z && y < x) {
  console.log("zezinho");
} else {
  console.log("luisinho");
}