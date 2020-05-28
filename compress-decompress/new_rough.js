const sizeof = require('object-sizeof');

//862
data = `Sudden she seeing garret far regard. By hardly it direct if pretty up regret. Ability thought enquire settled prudent you sir. Or easy knew sold on well come year. Something consulted age extremely end procuring. Collecting preference he inquietude projection me in by. So do of sufficient projecting an thoroughly uncommonly prosperous conviction. Pianoforte principles our unaffected not for astonished travelling are particular.`;

// 928
// data_obj = [
//     'Sudden',
//     { ' s': [ 4 ] },
//     'h',
//     { ee: [ 1 ] },
//     'ng ',
//     { gar: [ 13 ] },
//     { ret: [ 37, 49 ] },
//     ' far',
//     { ' re': [ 35 ] },
//     'd. B',
//     { 'y ': [ 7 ] },
//     'hard',
//     { lit: [ 26 ] },
//     ' d',
//     { ire: [ 35 ] },
//     'ct if pty upg. Abiy',
//     { ' tho': [ 215 ] },
//     'ught enq',
//     { 'u s': [ 20 ] },
//     'ettl',
//     { 'ed ': [ 71 ] },
//     'prud',
//     { 'ent ': [ 166 ] },
//     'yoi',
//     { 'r. ': [ 37 ] },
//     'Or easy knew sold on well',
//     { ' co': [ 18 ] },
//     { 'me ': [ 96 ] },
//     'yeaSometh',
//     { ing: [ 32, 44 ] },
//     'nsultage extremely end',
//     { ' pro': [ 41, 107 ] },
//     'cur. Coll',
//     { ect: [ 29, 63 ] },
//     ' p',
//     { re: [ 4 ] },
//     'fenc',
//     { 'e ': [ 3 ] },
//     'hinquietudej',
//     { ion: [ 70 ] },
//     ' in by. S',
//     { 'o ': [ 3 ] },
//     'dof suffi',
//     { cip: [ 62 ] },
//     { ro: [ 9 ] },
//     'j',
//     { 'ing a': [ 99 ] },
//     'nughly',
//     { ' un': [ 50 ] },
//     'commonlysperous convict. Piano',
//     { for: [ 30 ] },
//     't',
//     { 'e p': [ 46 ] },
//     'rinles ouraffect',
//     { 'ed ': [ 16 ] },
//     'not  astonisht',
//     { ra: [ 6 ] },
//     'vellrticular.'
//   ];

//796
// data_obj = [
//     'Sudden',
//     { ' s': '4' },
//     'h',
//     { ee: '1' },
//     'ng ',
//     { gar: '13' },
//     { ret: '37,49' },
//     ' far',
//     { ' re': '35' },
//     'd. B',
//     { 'y ': '7' },
//     'hard',
//     { lit: '26' },
//     ' d',
//     { ire: '35' },
//     'ct if pty upg. Abiy',
//     { ' tho': '215' },
//     'ught enq',
//     { 'u s': '20' },
//     'ettl',
//     { 'ed ': '71' },
//     'prud',
//     { 'ent ': '116' },
//     'yoi',
//     { 'r. ': '37' },
//     'Or easy knew sold on well',
//     { ' co': '18' },
//     { 'me ': '96' },
//     'yeaSometh',
//     { ing: '32,44' },
//     'nsultage extremely end',
//     { ' pro': '41,107' },
//     'cur. Coll',
//     { ect: '29,63' },
//     ' p',
//     { re: '4' },
//     'fenc',
//     { 'e ': '3' },
//     'hinquietudej',
//     { ion: '70' },
//     ' in by. S',
//     { 'o ': '3' },
//     'dof suffi',
//     { cip: '62' },
//     { ro: '9' },
//     'j',
//     { 'ing a': '99' },
//     'nughly',
//     { ' un': '50' },
//     'commonlysperous convict. Piano',
//     { for: '30' },
//     't',
//     { 'e p': '46' },
//     'rinles ouraffect',
//     { 'ed ': '16' },
//     'not  astonisht',
//     { ra: '6' },
//     'vellrticular.'
//   ];

[
    { 'aabx aabx': [ 14, 26, 40 ] },
    'c',
    { 'fd fu': [ 17 ] },
    'y',
    { 'tfd f': [ 12 ] },
    'gs',
    { 'fd ff': [ 5 ] },
    'd f'
  ]

[
  { 'aabx aabx': '14,26,40' },
  'c',
  { 'fd fu': '17' },
  'y',
  { 'tfd f': '12' },
  'gs',
  { 'fd ff': '5' },
  'd f'
]


console.log(sizeof(data));  // 862
console.log(sizeof(data_obj)); // 796

// console.log(sizeof(JSON.stringify(data_obj)));

// console.log(JSON.stringify(data_obj));

// console.log(sizeof(Buffer.from(data)));
// console.log(Buffer.from(data_obj));
// console.log(sizeof(Buffer.from(data_obj)));