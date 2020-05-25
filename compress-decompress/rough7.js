z = [1, 4, 5, 7, 8, 8, 7, 7, 8];

// z.forEach(element => {
//     if(element == 8) {
//         element = 0;
//     }
// });

// while (z.indexOf(8) !== -1) {
//     z[z.indexOf(8)] = 0;
// };

u = [...z]
x = u.sort();
y = [...new Set(x)];

console.log(y)
console.log(y.pop());
console.log(y)
console.log(z)