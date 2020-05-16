#!/usr/bin/env node

"use strict";

let args = require('minimist')(process.argv.slice(2), {
    boolean: ["help",  "lorem"],
    string: ["file"]
});
let path = require('path');
let fs = require('fs');

if (args.help) {
    printHelp();
} else if (args.file) {
    let input_file = path.join(__dirname, args.file);
    processFile(input_file);
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

function processFile(input_filepath) {

    let target_file;
    
    fs.readFile(input_filepath, (err, contents) => {

        if (err) {
            console.log(err);
            return
        } else if (args.lorem) {
                target_file = path.join(__dirname, 'loremFile.txt');
                contents = contents;
                fs.writeFile(target_file, contents, err => {
                    if (err) {
                        error(err, false);
                        return
                    };
                });
            } else {
                target_file = path.join(__dirname, 'uppcaseFile.txt');
                contents = contents.toString().toUpperCase();
                fs.writeFile(target_file, contents, err => {
                    if (err) {
                        error(err, false);
                        return
                    };
                });
            };
    });
}