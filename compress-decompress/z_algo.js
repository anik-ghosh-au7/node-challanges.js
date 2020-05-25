// let main_input = 'mtaabxaabxcaabxaabxayt';
// let main_input = 'aabxaabxcaabxaabxayt';
// let main_input = 'aabxaabxcfdfaabxaabxuytaabxaabxfdfgaabxaabxs';
let input = 'aabx aabxcfdfaabx aabxuytaabx aabxfdfgaabx aabxs';
// caytfdfg
// let data_obj = [
//     {'aabxaabx': [0, 9, 10, 11, 12, 13]},
//     't',
//     'c',
//     'a',
//     'y',
//     't'
// ];


// console.log(Z);
// console.log(Z.length);
// console.log(input.length);

let data_obj = [];

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
}

let z_arr = calculateZ(input);

// [
//     0, 1, 0, 0, 4, 1, 0,
//     0, 0, 8, 1, 0, 0, 5,
//     1, 0, 0, 1, 0, 0
//   ]

const index_length = (idx) => (idx + '').toString().length

let max_z = Math.max(...z_arr);
// console.log(z_arr);
// console.log(max_z);

// console.log(index_length(z_arr.indexOf(max_z)));

if (max_z > index_length(z_arr.indexOf(max_z))) {
    key = input.slice(0, max_z);
    // console.log(key)
    value = [0];
    z_arr.forEach((elem,index) => {
        if (elem == max_z) {
            value.push(index)
        }
    })
    data_obj.push({[key]: value});
    // console.log(value);
    // console.log(data_obj[0][key]);
    for (let i = value.length-1; i >=0; i--) {
        // console.log(value[i], value[i]+max_z);
        input = input.slice(0, value[i]) + input.slice(value[i] + max_z);
        console.log(input);
    };
    // console.log(main_input);
}

console.log(data_obj);