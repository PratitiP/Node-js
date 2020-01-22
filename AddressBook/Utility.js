/**
 * Purpose   : All functions and utilities for reuse.
 * @author   : Pratiti S
 */

var fs = require('fs');
var readline = require('readline');

exports.readdir = function () {
    let regexExtension = /[^\\]*\.json$/;
    let jsonFilesArr = [];
    
    let files = fs.readdirSync(__dirname);
    files.forEach(file => {
        if (file.match(regexExtension)) {
            // console.log(file);
            jsonFilesArr.push(file);
        }
    });
    // console.log(jsonFilesArr);
    return jsonFilesArr;
}


/**
 * @description Creates the readline object.
 * @returns the readline object
 */
exports.userInput = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
}

/**
 * @description Writing array of object in a json file
 * @param {*} fileName 
 * @param {*} array 
 */
exports.write = (fileName, array) => {
    var json = JSON.stringify(array);
    fs.writeFile(fileName, json, function (err) {
        if (err) throw err;
        console.log('Saved');
    });
}

/**
 * @description Reading data from the given json file 
 * @param {*} fileName 
 */
exports.read = (fileName) => {
    return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}


