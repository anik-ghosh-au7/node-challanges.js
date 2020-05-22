const sizeof = require('object-sizeof');

let input = 'taabxaabxcaabxaabxaytaabxaabxaabxaabxaabxaabxaabxaabx 125';

console.log('input size : ', sizeof(input)); // 114

let buffer_str = Buffer.from(input);

console.log('buffer_str size : ', sizeof(buffer_str)); // 57

let buffer_str1 = JSON.stringify(buffer_str);

console.log('buffer_str1 size : ', sizeof(buffer_str1)); // 424

console.log(sizeof(buffer_str1.slice(24, buffer_str1.length-1))); // 374

let str_new = eval(buffer_str1.slice(24, buffer_str1.length-1));

console.log(sizeof(Buffer.from(str_new)));// 57

let data = Buffer.from(str_new).toString();

console.log(buffer_str1);
console.log(data);

// let new_str1 = {"data":[116,97,97,98,120,97,97,98,120,99,97,97,98,120,97,97,98,120,97,121,116,97,97,98,120,97,97,98,120,97,97,98,120,97,97,98,120,97,97,98,120,97,97,98,120,97,97,98,120,97,97,98,120]};

// let demo_data = new_str1.data;

// let demo_data1 = Buffer.from(demo_data).toString();
// console.log(demo_data1);