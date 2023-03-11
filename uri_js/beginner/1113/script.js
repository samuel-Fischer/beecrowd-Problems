const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

for(i = 0; i <= input.length; i++) {
    let [x, y] = lines.shift().split(' ');
    if(+x == +y) {
        return;
    } else if (+x > +y) {
        console.log("Decrescente");
    } else {
        console.log("Crescente");
    };
};