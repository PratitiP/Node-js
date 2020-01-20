// Requires fs module in which readFile function is defined. 
const fs = require('fs');
const util = require("./Util");

let fileArr = [];

fs.readFile(__dirname + '/flower.txt', (err, data) => {
    if (err) throw err;

    fileArr = data.toString().split(',');
    fileArr.forEach((Element, index) => {
        fileArr[index] = Element.toLowerCase();
    });

    // Get process.stdin as the standard input object.
    const standard_input = process.stdin;

    console.log(`Enter a flower name to search in a file flower.txt `);
    standard_input.on('data', (data) => {
        let input = data.toString().trim().toLowerCase();

        if (input.length != 0) {
            result = util.binarySearch(fileArr, input);
            if (result)
                console.log(`${input} is present in the file.`);
            else
                console.log(`${input} is not present in the file.`);
            process.exit();
        } else
            console.log("Enter some string to search in file ");
    });

});


