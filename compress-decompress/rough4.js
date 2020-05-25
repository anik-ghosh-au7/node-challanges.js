const sizeof = require('object-sizeof');
const fs = require('fs');
let input = 'taabxaabxcaabxaabxaytaabxaabxaabxaabxaabxaabxaabxaabx';
let data4 = [
    {'aabxaabx': [0, 9, 10, 11, 12, 13]},
    't',
    'c',
    'a',
    'y',
    't'
];

let new_data = Buffer.from(data4);
let new_data1 = Buffer.from(JSON.stringify(data4));
let new_data2 = Buffer.from(input);

console.log(sizeof(new_data)); //  6 -- data is lost
console.log(sizeof(new_data1)); // 52
console.log(sizeof(new_data2)); // 53

console.log(new_data1);
console.log(new_data1.toString());
console.log(new_data.toJSON());
console.log(JSON.parse(new_data1));
console.log(new_data1.toJSON())
