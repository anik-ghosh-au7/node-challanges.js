const sizeof = require('object-sizeof');

const data = 'aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f';

const index_length = (idx) => (idx + '').toString().length;

String.prototype.insert = function(idx, str) {
    return this.slice(0, idx) + str + this.slice(idx);
};

String.prototype.delete = function(idx, count) {
    return this.slice(0, idx) + this.slice(idx + count);
};

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

const compression = (input) => {

let data_obj = [];
let unmatched_str = '';

while (input.length > 0) {

    let z_arr = calculateZ(input);
    
    uni_z = [...new Set([...z_arr].sort())];

    while (uni_z.length > 0) {
    
    let max_z = uni_z.pop();

    if (max_z == 0) {
        unmatched_str = unmatched_str + input[0];
        input = input.slice(1);
        break;
        
    } else if (max_z > index_length(z_arr.indexOf(max_z))) {
        if (unmatched_str) {
            data_obj.push(unmatched_str);
        };
        unmatched_str = '';
        key = input.slice(0, max_z);
        value = '';
        z_arr.forEach((elem,index) => {
            if (elem == max_z && index_length(index) < max_z) {
                // value.push(index)
                if (value) {
                    value = value + ',' + index
                } else {
                    value = value + index;
                } 
            }
        });
        data_obj.push({[key]: value});
        let value_arr = value.split(',').map(elem => Number(elem))
        for (let i = value_arr.length-1; i >=0; i--) {
            input = input.delete(value_arr[i], max_z)
        };
        input = input.delete(0, max_z)
        break;
        }
    }
};
if (unmatched_str) {
    data_obj.push(unmatched_str);
}
    console.log(data_obj);
    return data_obj;
};

const decompression = (compressed_input) => {

    let retrived_data = compressed_input;

    let output_str = '';

    for (let i = retrived_data.length-1; i >= 0; i--) {
        if (typeof(retrived_data[i])=== "object") {
            let key = Object.keys(retrived_data[i]);
            let indices = Object.values(retrived_data[i])[0].split(',').map(elem => Number(elem));
            output_str = output_str.insert(0, key);
            for (let j = 0; j < indices.length; j++) {
                output_str = output_str.insert(indices[j], key);
            };
        } else {
            output_str = retrived_data[i] + output_str;
        };
    };

    return output_str;
};

const main = (input) => {

    let compressed_data = compression(input);

    let decompressed_data = decompression(compressed_data);

    console.log(sizeof(input));
    console.log(sizeof(compressed_data));
    console.log(sizeof(decompressed_data));
    
    return decompressed_data;

};

console.log(main(data));
