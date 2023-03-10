const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

// for (i = 0; i <= lines.length; i++) {
//   let [x, y, z] = lines.shift().split(' ')
//   if (x == y == z) {
//     console.log("*")
//   } else if (x != y && x != z) {
//     console.log("A")
//   } else if (y != x && y != z) {
//     console.log("B")
//   } else if (z != x && z != y) {
//     console.log("C")
//   }
// }

while (lines.length > 0) {
  let [x, y, z] = lines.shift().split(' ')
  if (x == y == z) {
    console.log("*")
  } else if (x != y && x != z) {
    console.log("A")
  } else if (y != x && y != z) {
    console.log("B")
  } else if (z != x && z != y) {
    console.log("C")
  }
}

// for (i = 0; i <= lines.length; i++) {
//   let linha = lines.shift();
//   let valor = linha.split(' ');
//   let x = valor[0]
//   let y = valor[1]
//   let z = valor[2]
//   if (x == y == z) {
//     console.log("*")
//   } else if (x != y && x != z) {
//     console.log("A")
//   } else if (y != x && y != z) {
//     console.log("B")
//   } else if (z != x && z != y) {
//     console.log("C")
//   }
// }