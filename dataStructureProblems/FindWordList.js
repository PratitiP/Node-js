/*
* @description: Read the Text from a file, split it into words and arrange it as Linked List.
*
* @author: pratiti
* @version: 1.0
* @date: 20/1/2020
*/

// Requires fs module in which readFile function is defined. 
const fs = require('fs');
const LinkedList = require('./LinkedList');
const util=require("util");

const writeFile=util.promisify(fs.writeFile);

let ll = new LinkedList();

fs.readFile(__dirname + '/flower.txt', (err, fileData) => {
    if (err) throw err;

    //read file and store data into unordered linked list.
    let data = fileData.toString();
    let substring = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i] == ',') {
            ll.add(substring);
            substring = '';
        } else {
            substring = substring + data[i].toLowerCase();
        }
    }

    console.log("List from file flower.txt : ");
    let llData=ll.printList();
    console.log(llData);

    // Get process.stdin as the standard input object.
    const standard_input = process.stdin;

    console.log(`\nEnter a flower name to search in a List in flower.txt `);
    standard_input.on('data', (data) => {
        let input = data.toString().trim().toLowerCase();
        let newList='';
        if (input.length != 0) {
            if (ll.indexOf(input) != -1) {
                console.log(`\n${input} is present in the file. Lets Delete it`);
                ll.remove(input);
                newList=ll.printList();
            } else {
                console.log(`\n${input} is not present in the file. Lets add it to the list`);
                ll.add(input);
                newList=ll.printList();
            }
            writeBackToFile(newList);
        } else
            console.log("Enter some string to search in file ");
    });

});

/**
 * write modified data to output file
 */
async function writeBackToFile(newList){
    try{
        await writeFile(__dirname + '/output.txt', newList)
        console.log("Write back successful");
    }catch(err){
        console.log(err);
    }
    process.exit();
}


