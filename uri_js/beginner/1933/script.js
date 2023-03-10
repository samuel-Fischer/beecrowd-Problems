const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let [x, y] = lines[0].split(' ');

if (x == y) {
    console.log(x)
} else if (x > y) {
    console.log(x)
} else {
    console.log(y)
}