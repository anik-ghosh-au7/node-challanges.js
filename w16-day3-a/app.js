#!/usr/bin/env node

"use strict";

let args = require('minimist')(process.argv.slice(2), {
    boolean: ["help",  "lorem"],
    string: ["file"]
});
let path = require('path');
let fs = require('fs');
let Transform = require('stream').Transform;

if (args.help) {
    printHelp();
} else if (args.file) {
    let input_file = path.join(__dirname, args.file);
    let stream = fs.createReadStream(input_file);
    processFile(stream);
} else {
    error('Incorrect usage', true);
};

function printHelp() {
    console.log('index usage:');
    console.log('');
    console.log('--help                        Print help');
    console.log('--file=filename (required)    Read file');
    console.log('--lorem (optional)            Write to loremFile.txt (unchanged)');
    console.log('                              Write to uppcaseFile.txt (converting all chracters to upper case)');
};

function error(msg, includeHelp=false) {
    console.log(msg);
    if (includeHelp) {
        printHelp();
    };
};

function processFile(inStream) {

    let target_stream, target_file, transform_stream;

    if (args.lorem) {

        target_file = path.join(__dirname, 'loremFile.txt');
        transform_stream = new Transform({
            transform(chunk, enc, callback) {
                this.push(chunk);
                callback();
            }
        });

    } else {

        target_file = path.join(__dirname, 'uppcaseFile.txt');
        transform_stream = new Transform({
            transform(chunk, enc, callback) {
                this.push(chunk.toString().toUpperCase());
                callback();
            }
        });

    };

    // inStream.pipe(upper_Stream);
    target_stream = fs.createWriteStream(target_file);
    // upper_Stream.pipe(target_stream);
    inStream.pipe(transform_stream).pipe(target_stream);

};