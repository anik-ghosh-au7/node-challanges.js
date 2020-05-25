const sizeof = require('object-sizeof');
const fs = require('fs');


// console.log(sizeof('taabxaabxcaabxaabxaytaabxaabxaabxaabxaabxaabxaabxaabx')); // 106

// let input = 'taabxaabxcaabxaabxaytaabxaabxaabxaabxaabxaabxaabxaabx';

// let data = [
//         {'aabxaabx': [0, 9, 10, 11, 12, 13]},
//         'tcayt'
//     ];

// let data1 = [
//         JSON.stringify({'aabxaabx': [0, 9, 10, 11, 12, 13]}),
//         'tcayt'
//     ];

// let data2 = [
//         {'aabxaabx': JSON.stringify([0, 9, 10, 11, 12, 13])},
//         'tcayt'
//     ];

// let data3 = [
//         {'aabxaabx': JSON.stringify([0, 9, 10, 11, 12, 13])},
//         't',
//         'c',
//         'a',
//         'y',
//         't'
//     ];

let data4 = [
        {'aabxaabx': [0, 9, 10, 11, 12, 13]},
        't',
        'c',
        'a',
        'y',
        't'
    ];

// console.log('non string --> ', sizeof(data)); // 74
// console.log('full string --> ', sizeof(JSON.stringify(data)));  // 80
// console.log('key value str --> ', sizeof(data1)); // 70
// console.log('value str --> ', sizeof(data2)); // 60
// console.log('sep non matched str --> ', sizeof(data3)); // 60

// let file = fs.readFileSync(__dirname+'/demo.txt').toString(); // 20
// let file = fs.readFileSync(__dirname+'/demo.txt'); // 10
// console.log(sizeof(file));

// let new_data = Buffer.from(JSON.stringify(data3));

let new_data1 = Buffer.from(JSON.stringify(data4));

// console.log(sizeof(new_data)) // 54
// // console.log(new_data);
// console.log(eval(new_data.toString()));

console.log(sizeof(new_data1)) // 52
// // console.log(new_data1);
// console.log(eval(new_data.toString()));

// console.log(sizeof(Buffer.from(input))); // 53

