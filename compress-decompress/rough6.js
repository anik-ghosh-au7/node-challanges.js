const sizeof = require('object-sizeof');
const fs = require('fs');

let main_input = 'aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f';

console.log(sizeof(main_input));

let data_obj = [];

const index_length = (idx) => (idx + '').toString().length;

const calculateZ = (input) => {
    let Z = Array(input.length).fill(0);
    let left = 0;
    let right = 0;
    for (let k = 1; k < input.length; k++) {
        if (k > right) {
            left = right = k;
            while (right < input.length && input[right] === input[right - left]) {
                right++;
            };
            Z[k] = right - left;
            right--;
        } else {
            let k1 = k - left;
            if (Z[k1] < right - k + 1) {
                Z[k] = Z[k1];
            } else {
                left = k;
                while (right < input.length && input[right] === input[right - left]) {
                    right++;
                };
                Z[k] = right - left;
                right--; 
            }
        }
    }
    return Z;
};

// let input = [
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

while (main_input.length > 0) {

let z_arr = calculateZ(main_input);

let max_z = Math.max(...z_arr);

if (max_z == 0) {
    data_obj.push(main_input[0]);
    main_input = main_input.slice(1);
    
} else if (max_z > index_length(z_arr.indexOf(max_z))) {
    key = main_input.slice(0, max_z);
    value = [0];
    z_arr.forEach((elem,index) => {
        if (elem == max_z && index_length(index) < max_z) {
            value.push(index)
        }
    });
    data_obj.push({[key]: value});
    for (let i = value.length-1; i >=0; i--) {
        main_input = main_input.slice(0, value[i]) + main_input.slice(value[i] + max_z);
        // console.log(main_input);
    };
};

};

console.log(data_obj);

let buffer_data = Buffer.from(JSON.stringify(data_obj));

console.log(sizeof(buffer_data));

let retrived_data = JSON.parse(buffer_data);
