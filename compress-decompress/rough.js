const sizeof = require('object-sizeof');
const fs = require('fs');

//   // 2B per character, 6 chars total => 12B
//   console.log(sizeof({abc: 'def'}));

//   // 8B for Number => 8B
//   console.log(sizeof(12345));

//   var param = { 
//     'a': 1, 
//     'b': 2, 
//     'c': {
//       'd': 4
//     }
//   };
//   // 4 one two-bytes char strings and 3 eighth-bytes numbers => 32B
//   console.log(sizeof(param));


// console.log(sizeof('mtaabxaabxcaabxaabxayt'));

// console.log(sizeof([
//     {'m': (0)},
//     {'t': (0, 21)},
//     {'aabxaabx': (0, 9)},
//     {'c': (0)},
//     {'a': (0)},
//     {'y': (0)}
//     // 'mcay'
// ]))

console.log(sizeof('taabxaabxcaabxaabxaytaabxaabxaabxaabxaabxaabxaabxaabx'));

let data = [
        {'aabxaabx': [0, 9, 10, 11, 12, 13]},
        'tcayt'
    ];

let data1 = [
        JSON.stringify({'aabxaabx': [0, 9, 10, 11, 12, 13]}),
        'tcayt'
    ];

let data2 = [
        {'aabxaabx': JSON.stringify([0, 9, 10, 11, 12, 13])},
        'tcayt'
    ];

let data3 = [
        {'aabxaabx': JSON.stringify([0, 9, 10, 11, 12, 13])},
        't',
        'c',
        'a',
        'y',
        't'
    ];

console.log('non string --> ', sizeof(data));
console.log('full string --> ', sizeof(JSON.stringify(data)));
console.log('key value str --> ', sizeof(data1));
console.log('value str --> ', sizeof(data2));
console.log('sep non matched str --> ', sizeof(data3));

let file = fs.readFileSync(__dirname+'/demo.txt').toString();
console.log(sizeof(file));






// console.log(data);
// console.log(eval(data));

// console.log(sizeof(JSON.stringify([
//     //     // {'m': (0)},
//         {'t': [0, 21]},
//         {'aabxaabx': [0, 9]},
//     //     // {'c': (0)},
//     //     // {'a': (0)},
//     //     // {'y': (0)}
//         'mcay'
//     ])))


// console.log(sizeof('tatatata'));

// let data = [
    
//     {'ta': (0, 1, 2, 3, 4, 5)},
    
// ]
// console.log(sizeof(data))
// console.log(data[0].ta)

// console.log(sizeof('tata'));

// console.log(sizeof([
    
//     {'ta': (0, 1)},
    
// ]))

// let arr = [1, 2, 3];

// function Tuple(/* values */) {
//     var args = Array.prototype.slice.call(arguments, 0);
//     this._store = new Array(args.length);
//     this.pack.apply(this, args);
// }

// Tuple.prototype.pack = function pack(/* values */) {
//     var store = this._store;
//     var i = store.length;

//     while (i--) {
//         store[i] = arguments[i];
//     }

//     return this;
// };

// console.log(new Tuple(...arr));

// let arr = [1, 2, 3];

// let Tuple = (1, 2, 3)


// console.log(...Tuple);


// console.log(sizeof(1));
// console.log(sizeof('1'));
// console.log(sizeof([1]));
// console.log(sizeof({v : 1}));

// let data = [1, 2, 3];
// console.log(sizeof(data));
// console.log(JSON.stringify(data));
// console.log(eval(JSON.stringify(data)));
// console.log(sizeof(JSON.stringify(data)));