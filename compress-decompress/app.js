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
data_obj = [
    { 'aabx aabx': [ 0, 14, 26, 40 ] },
    'c|y|gs|d f',
    { 'fd fu': [ 0, 17 ] },
    { 'tfd f': [ 0, 12 ] },
    { 'fd ff': [ 0, 5 ] },
  ];

  let buffer_data = Buffer.from(JSON.stringify(data_obj));

  console.log(sizeof(buffer_data));

  console.log(JSON.parse(buffer_data));