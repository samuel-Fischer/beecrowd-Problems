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

// for (let index = lines.length; index >= 0; index--) {
//     let teste = lines.shift().split(" ")
//     if (+teste[0] > +teste[1]) {
//         console.log("Decrescente");
//     } else if (+teste[0] < +teste[1]) {
//         console.log("Crescente");
//     } else {
//         break;
//     } 
// }

// let [x, y] = lines.shift().split(' ');
// while (true){
//     if(x < y) {
//         console.log('Crescente')
//     } else if (x > y) {
//         console.log('Decrescente')
//     } else {
//         break
//     }
// }