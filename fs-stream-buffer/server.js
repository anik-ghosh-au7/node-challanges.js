#!/usr/bin/env node

// console.log('hello world');
// console.error('error!!!!');

"use strict";

// let args = process.argv;

let args = require('minimist')(process.argv.slice(2),{
    boolean: ["help"],
    string: ["file", "out"]
});
let fs = require('fs');
let path = require('path');
let Transform = require('stream').Transform;

// console.log(args);
// console.log(args.file);

if (args.help) {
    printHelp();
} else if (args.file) {
    // console.log(args.file);
    // let content = fs.readFileSync(args.file);
    // console.log(content);
    // console.log(content.toString());
    let filePath = path.join(__dirname, args.file);
    // processFile(filePath);
    let stream = fs.createReadStream(filePath);
    processFile(stream);
} else {
    error('Incorrect usage', true)
};

function printHelp(){
    console.log('index usage:');
    console.log('');
    console.log('--help             Print help');
    console.log('--file=filename    Read file');
    console.log('--out(optional)    Write to uppcaseFile.txt');
};

function error(msg, includeHelp = false){
    console.log(msg);
    if (includeHelp) {
        printHelp();
    };
};

// let data = new Buffer('Hello world!!!');
// console.log(data);

// function processFile(filePath){
//     fs.readFile(filePath, (err, contents) => {
//         if(err){
//             console.log(err.toString());
//         } else{
//             // contents = contents;
//             contents = contents.toString().toLowerCase();
//             process.stdout.write(contents);
//         };
//     });
// }

function processFile(inStream){
    // let outStream = inStream;
    // let targetStream = process.stdout;
    // outStream.pipe(targetStream);

    let outStream = inStream;

    var upperStream = new Transform({
        transform(chunk, enc, callback){
            this.push(chunk.toString().toUpperCase());
            callback();
        }
    })

    outStream = outStream.pipe(upperStream);

    // var targetStream = process.stdout;

    let targetStream;
    if (!args.out) {
        targetStream = process.stdout;
    } else {
        let OUT_FILE = path.join(__dirname, 'uppcaseFile.txt');
        targetStream = fs.createWriteStream(OUT_FILE);
    }

    outStream.pipe(targetStream);
}