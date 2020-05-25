const sizeof = require('object-sizeof');

let data = 'aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f';


function getMax(arr) {
    let len = arr.length;
    let max = -Infinity;

    while (len--) {
        max = arr[len] > max ? arr[len] : max;
    }
    return max;
};


let data_obj = [];

const index_length = (idx) => (idx + '').toString().length;

String.prototype.insert = function(idx, str) {
    return this.slice(0, idx) + str + this.slice(idx);
};

String.prototype.delete = function(idx, count) {
    return this.slice(0, idx) + this.slice(idx + count);
};

const calculateZ = () => {
    let Z = Array(data.length).fill(0);
    let left = 0;
    let right = 0;
    for (let k = 1; k < data.length; k++) {
        if (k > right) {
            left = right = k;
            while (right < data.length && data[right] === data[right - left]) {
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
                while (right < data.length && data[right] === data[right - left]) {
                    right++;
                };
                Z[k] = right - left;
                right--; 
            }
        }
    }
    return Z;
};

const compression = (z_arr, max_z) => {
    
    if (max_z == 0) {
        data_obj.push(data[0]);
        data = data.slice(1);
        
    } else if (max_z > index_length(z_arr.indexOf(max_z))) {
        key = data.slice(0, max_z);
        value = [0];
        z_arr.forEach((elem,index) => {
            if (elem == max_z && index_length(index) < max_z) {
                value.push(index)
            }
        });
        data_obj.push({[key]: value});
        for (let i = value.length-1; i >=0; i--) {
            data = data.delete(value[i], max_z)
        }
    } 
    else {
        while (z_arr.indexOf(max_z) !== -1) {
            z_arr[z_arr.indexOf(max_z)] = 0;
        };
        max = getMax(...z_arr)
        if (max >= 2) {
            compression(z_arr, max);
        } else {
            compression(z_arr, 0);
        } 
    }
};

const decompression = (compressed_input) => {

    let retrived_data = JSON.parse(compressed_input)

    let output_str = '';

    for (let i = retrived_data.length-1; i >= 0; i--) {
        if (typeof(retrived_data[i])=== "object") {
            let key = Object.keys(retrived_data[i]);
            let indices = Object.values(retrived_data[i]);
            for (let j = 0; j < indices[0].length; j++) {
                output_str = output_str.insert(indices[0][j], key);
            }
        } else {
            output_str = retrived_data[i] + output_str;
        };
    };

    return output_str;
};

const main_compression = () => {
    while (data.length > 0) {

    let z_arr = calculateZ();
    let max_z = getMax(z_arr);

    compression(z_arr, max_z);
    };
    // console.log(data_obj);
    let buffer_data = Buffer.from(JSON.stringify(data_obj));
    return buffer_data;
};

const main = () => {

    let compressed_data = main_compression();

    let decompressed_data = decompression(compressed_data);

    console.log(sizeof(compressed_data));
    console.log(sizeof(decompressed_data));
     
    return decompressed_data;

};

console.log(main());
