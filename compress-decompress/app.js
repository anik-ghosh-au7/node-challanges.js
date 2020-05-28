const sizeof = require('object-sizeof');

// 106
// data_obj = [
//     { 'aabx aabx': [ 0, 14, 26, 40 ] },
//     'c',
//     { 'fd fu': [ 0, 17 ] },
//     'y',
//     { 'tfd f': [ 0, 12 ] },
//     'g',
//     's',
//     { 'fd ff': [ 0, 5 ] },
//     'd',
//     ' ',
//     'f'
//   ];


// 97
// data_obj = [
//     { 'aabx aabx': [ 0, 14, 26, 40 ] },
//     'c',
//     { 'fd fu': [ 0, 17 ] },
//     'y',
//     { 'tfd f': [ 0, 12 ] },
//     'gs',
//     { 'fd ff': [ 0, 5 ] },
//     'd f',
//   ];


// 91
// data_obj = [
//     { 'aabx aabx': [ 0, 14, 26, 40 ] },
//     'c|y|gs|d f',
//     { 'fd fu': [ 0, 17 ] },
//     { 'tfd f': [ 0, 12 ] },
//     { 'fd ff': [ 0, 5 ] },
//   ];


// // 83
// data_obj = [
//   { 'aabx aabx': [14, 26, 40] },
//   'c|y|gs|d f',
//   { 'fd fu': [17] },
//   { 'tfd f': [12] },
//   { 'fd ff': [5] },
// ];

// 80
// data_obj = [
//   { 'aabx aabx': [14, 26, 40] },
//   'cygsd f',
//   { 'fd fu': [17] },
//   { 'tfd f': [12] },
//   { 'fd ff': [5] },
// ];


// data_obj = [
//   { 'aabx aabx': [14, 26, 40] },
//   { 'fd fu': [17] },
//   { 'tfd f': [12] },
//   { 'fd ff': [5] },
// ];

// // 98
// data_obj = [
//   { 'aabx aabx': [ 14, 26, 40 ] },
//   'c',
//   { 'fd fu': [ 17 ] },
//   'y',
//   { 'tfd f': [ 12 ] },
//   'g',
//   's',
//   { 'fd ff': [ 5 ] },
//   'd',
//   ' ',
//   'f'
// ];


// // 89
// data_obj = [
//   { 'aabx aabx': [ 14, 26, 40 ] },
//   'c',
//   { 'fd fu': [ 17 ] },
//   'y',
//   { 'tfd f': [ 12 ] },
//   'gs',
//   { 'fd ff': [ 5 ] },
//   'd f',
// ];


// // 83
// data_obj = [
//   { 'aabx aabx': [ 14, 26, 40 ] },
//   { 'fd fu': [ 17 ] },
//   { 'tfd f': [ 12 ] },
//   { 'fd ff': [ 5 ] },
//   'd f|gs|y|c'
// ];

  // console.log(sizeof(data_obj));

  // let buffer_data = Buffer.from(JSON.stringify(data_obj));

  // console.log(sizeof(buffer_data));

  // console.log(JSON.parse(buffer_data));

  // let str1 = ['abc'];
  // let str2 = ['a|b|c'];
  // let str3 = ['a', 'b', 'c'];

  // console.log(sizeof(str1));
  // console.log(sizeof(str2));
  // console.log(sizeof(str3));

// 110  
// const data_obj = 'aabx aabx,14,26,40,c,fd fu,17,y,tfd f,12,gs,fd ff,5,d f';


//146
const data = 'aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f';


//88
const data_obj = [
{ 'aabx aabx': '14,26,40' },
'c',
{ 'fd fu': '17' },
'y',
{ 'tfd f': '12' },
'gs',
{ 'fd ff': '5' },
'd f'
];

console.log(sizeof(data)); // 146
console.log(sizeof(data_obj)); // 88
