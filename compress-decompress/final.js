const sizeof = require('object-sizeof');
const fs = require('fs');
let input = 'taabxaabxcaabxaabxaytaabxaabxaabxaabxaabxaabxaabxaabx';
let data_obj = [
    {'aabxaabx': [0, 9, 10, 11, 12, 13]},
    't',
    'c',
    'a',
    'y',
    't'
];

let buffer_data = Buffer.from(JSON.stringify(data_obj));

console.log(sizeof(input)); // 106
console.log(sizeof(buffer_data)); // 52

let retrived_data = JSON.parse(buffer_data);


console.log(retrived_data);