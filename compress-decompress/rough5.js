// let z = Array(10).fill(0)

// console.log(z);

// let dig = 45

// console.log((dig + '').toString().length);

// console.log(Math.max(...[1, 2, 3, 4, 9]));

// let main_input = 'aabxaabxcaabxaabxayt';

// console.log(main_input);

// main_input = main_input.slice(0, 9) + main_input.slice(17);

// console.log(main_input);

// main_input = main_input.slice(0,0) + main_input.slice(8);

// console.log(main_input);

// aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f
// aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f

let input = [
    { 'aabx aabx': [ 0, 14, 26, 40 ] },
    'c',
    { 'fd fu': [ 0, 17 ] },
    'y',
    { 'tfd f': [ 0, 12 ] },
    'g',
    's',
    { 'fd ff': [ 0, 5 ] },
    'd',
    ' ',
    'f'
  ];

//   console.log(retrived_data.length);

let output_str = '';

String.prototype.insert = function(idx, str) {
    return this.slice(0, idx) + str + this.slice(idx);
};
for (let i = input.length-1; i >= 0; i--) {
    if (typeof(input[i])=== "object") {
        let key = Object.keys(input[i]);
        let indices = Object.values(input[i]);
        for (let j = 0; j < indices[0].length; j++) {
            output_str = output_str.insert(indices[0][j], key);
        }
    } else {
        output_str = input[i] + output_str;
    };
};
console.log(output_str);


// a b c d e f g h i j k l m n o p q r s t u v w x y z y x w v u t s r q p o n m l k j i h g f e d c b a