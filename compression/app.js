// let data = new Buffer.from('Hello world!!!', 'base64');
// // console.log(data.charCodeAt(2));

// Uint8Array.from(atob(base64_string), c => console.log(c.charCodeAt(0)))

// // console.log(_base64ToArrayBuffer(data));
// // 
// // var uintArray = Base64Binary.decode(data);  
// // var byteArray = Base64Binary.decodeArrayBuffer(data); 
// // console.log(uintArray);
// // console.log(byteArray);

// // console.log(data.charCodeAt(2));

// // let string = "Hello World";
// // console.log(string.toString(2));

// function text2Binary(string) {
//     return string.split('').map(function (char) {
//         return char.charCodeAt(0).toString(2);
//     }).join(' ');
// };

// function binaryAgent3(str) {

    // return str.split(" ").map(function(elem) {
    //   return String.fromCharCode(parseInt(elem, 2));
    // }).join("")
  
//   };

// let data = 'Hello Anik';

// const text2Binary = (string) => string.split('').map(char => char.charCodeAt(0).toString(2)).join('-');

// console.log(text2Binary(data));

// const binary2Text = (string) => string.split('-').map(elem => String.fromCharCode(parseInt(elem, 2))).join('');

// console.log(binary2Text(text2Binary(data)));







// let data = 'Hello Anik';

// const text2Binary = (string) => string.split('').map(char => char.charCodeAt(0).toString(2).padStart(7, 0)).join('');

// console.log(text2Binary(data));

// // 01001000-01100101-01101100-01101100-01101111-00100000-01000001-01101110-01101001-01101011

// const binary2Text = (string) => string.match(/.{7}/g).map(elem => String.fromCharCode(parseInt(elem, 2))).join('');

// // const binary2Text = (string) => {
// //     let result_arr = [];
// //     for (let i=0; i<string.length; i+=7){
// //         let temp_arr = '';
// //         for (let j=i; j<i+7; j++) {
// //             temp_arr+=string[j];
// //         }
// //         // console.log(temp_arr + '--> ' + String.fromCharCode(parseInt(temp_arr, 2)));
// //         result_arr.push(String.fromCharCode(parseInt(temp_arr, 2)))
// //         // console.log(result_arr);
// //     } 
// //     return result_arr.join('')
// // }

// console.log(binary2Text(text2Binary(data)));

// console.log('start'+ String.fromCharCode(parseInt('100000', 2))+ 'end')


let data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tortor finibus massa porttitor mollis non eu lorem. Aliquam velit enim, molestie molestie lorem eget, tristique dignissim est. Vivamus non lectus ac justo sollicitudin vestibulum sit amet eu turpis. Praesent pellentesque orci sit amet augue auctor convallis. Etiam lacinia pulvinar mauris, sit amet scelerisque massa gravida et. Vivamus sed maximus arcu. Sed faucibus hendrerit ante. Curabitur vel arcu nibh. Duis tincidunt lacus nisi, pretium blandit erat efficitur nec. In elementum tellus at diam sodales consectetur.

Mauris ultricies bibendum interdum. Donec sollicitudin, turpis in luctus molestie, urna sapien rutrum ante, a gravida dui tortor sit amet lectus. Nulla facilisi. Vestibulum est dolor, interdum nec placerat non, faucibus vitae metus. Etiam blandit dolor id fermentum aliquam. Aenean ut bibendum orci. Sed efficitur nulla velit, non volutpat turpis imperdiet sed. Donec faucibus ante at ligula mollis pharetra. Ut accumsan vulputate lectus tincidunt dictum.

In hac habitasse platea dictumst. Praesent tempor nisi tempus ligula pulvinar placerat. Nullam nulla nisl, tincidunt id tristique ut, sollicitudin in sapien. Vivamus finibus mi in velit dapibus consequat. Sed at enim justo. Ut lobortis nisi ut tortor porta, vel congue ante ultricies. Quisque sed aliquam metus. Maecenas tortor nisl, rhoncus id tortor a, sodales auctor neque. Suspendisse libero metus, porta sit amet purus vel, elementum convallis ex. In rutrum, orci et efficitur luctus, risus felis sodales dui, quis varius dui sapien vel risus. In nisl mauris, ornare vel tellus a, volutpat malesuada justo.

In tempor, lectus sit amet pharetra rhoncus, quam nibh pharetra neque, in mattis arcu nulla at augue. Maecenas convallis, leo id eleifend feugiat, mi libero ornare eros, et euismod turpis neque at quam. Nullam euismod neque ut pellentesque tristique. Nunc risus odio, aliquet a gravida eget, consectetur et odio. Proin a blandit quam. Mauris ac quam purus. Ut euismod, ex luctus finibus imperdiet, tortor tortor bibendum magna, eu blandit quam tellus vitae massa. Ut ut mattis mi. Quisque ultricies diam a neque tristique, at blandit dolor eleifend. Duis imperdiet efficitur tempus. Nunc efficitur odio magna, ac tristique massa varius quis. Donec quis vehicula metus. Vivamus efficitur malesuada purus. Aenean eget lectus et erat pharetra commodo ac id mauris. Etiam facilisis mattis venenatis. Nam metus dolor, bibendum vitae dui a, vehicula feugiat sapien.

Sed feugiat consequat commodo. Nunc egestas diam vitae ligula pretium, nec placerat diam venenatis. Donec pulvinar porta leo ut convallis. Ut volutpat maximus diam, et sodales lectus. In hac habitasse platea dictumst. Integer facilisis nibh nec risus elementum, imperdiet tincidunt nisl interdum. Pellentesque pellentesque porta cursus. Morbi odio arcu, venenatis vel rutrum eu, placerat ac erat. Nunc auctor metus eros, quis mollis risus maximus nec. Maecenas malesuada ante a erat semper pharetra. Donec in interdum nisi. Donec cursus luctus interdum. Maecenas sit amet semper dui. Pellentesque eget lacus eget odio pretium gravida.`



// let data = 'Hel';

// const text2Binary = (string) => string.split('').map(char => char.charCodeAt(0).toString(2).padStart(7, 0)).join('');

// console.log(text2Binary(data));

// const binary2Text = (string) => string.match(/.{7}/g).map(elem => String.fromCharCode(parseInt(elem, 2))).join('');

// console.log(binary2Text(text2Binary(data)));




// ---------------------------------------------------------------------------------------------



// let data = 'Hello Anik!!!!!!';

const text2Binary = (string) => string.split('').map(char => char.charCodeAt(0).toString(2).padStart(7, 0)).join('');

// console.log(text2Binary(data));

const binary2Text = (string) => string.match(/.{7}/g).map(elem => String.fromCharCode(parseInt(elem, 2))).join('');

// console.log(binary2Text(text2Binary(data)));

const compressor = (input_data) => {
    let data = text2Binary(input_data);
    let result = '';
    let count = 1;

    if (data[0] === '1') {
        result += '0';
    };
    for (let i=0; i<data.length-1; i++) {
        if (data[i] === data[i+1]) {
            count++;
        } else {
            result += count;
            count = 1;
        };
    };
    result += count;
    return result;
};

const decompressor = (input_data) => {
    let result = '';
    for (let i=0; i<input_data.length; i++) {
        count = Number(input_data[i]);
        if (i % 2 === 0) {
            result += ('0'.repeat(count));
        } else {
            result += ('1'.repeat(count));
        };
    };
    return binary2Text(result);
};

const main = (string) => {
    // let stage_0 = compressor(string);
    // console.log('0th stage --> ', stage_0);
    // let stage_1 = compressor(stage_0);
    // console.log('1st stage --> ', stage_1);
    // let stage_2 = compressor(stage_1);
    // console.log('2nd stage --> ', stage_2);
    // let stage_3 = decompressor(stage_2);
    // console.log('3rd stage --> ', stage_3);
    // let stage_4 = decompressor(stage_3);
    // console.log('4th stage --> ', stage_4);
    // let stage_5 = decompressor(stage_4);
    // return stage_5;
    // console.log('input --> ', data);
    console.log('input length --> ', data.length)
    console.log('input binary length --> ', text2Binary(data).length);
    let stage_0 = compressor(string);
    console.log('compressed 0 length --> ', stage_0.length);
    let stage_1 = compressor(stage_0);
    console.log('compressed 1 length --> ', stage_1.length);
    let stage_2 = compressor(stage_1);
    console.log('compressed 2 length --> ', stage_2.length);
    // let stage_2 = decompressor(stage_1);
    // let stage_3 = decompressor(stage_2);
    return stage_2;
};

// console.log('output --> ', main(data));

main(data);