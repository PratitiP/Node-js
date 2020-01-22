/*
* @description: Create a Slot of 10 to store Chain of Numbers that belong to each Slot to
*                efficiently search a number from a given set of number.
*
* @author: pratiti
* @version: 1.0
* @date: 21/1/2020
*/
const fs = require('fs');
const OrderedList = require('./OrderedList');

let ll = new OrderedList();
let hashTable = [];

/**
 * read file 
 * in callback handle err and store filedata into hash table
 */
fs.readFile(__dirname + '/numbers.txt', (err, fileData) => {
    if (err) throw err;

    data = fileData.toString().trim() + ',';

    let substring = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i] == ',') {
            let number = (parseInt(substring));
            //store each number in hash table
            let hashIndex = hashFunction(number);
            setHashTable(hashIndex, number);
            substring = '';
        } else {
            substring = substring + data[i].toLowerCase();
        }
    }

    printHashTable();
    getUserInput();

});

function getUserInput() {
    console.log(`\nEnter a number to search in a number.txt using Hash Table`);

    // Get process.stdin as the standard input object.
    const standard_input = process.stdin;
    standard_input.on('data', (data) => {
        let input = data.toString().trim();
        if (input.length != 0) {
            let n = parseInt(input);
            if (Number.isInteger(n)) {
                searchInHashTable(n);
                //write back to output.txt
                //exit
            } else
                console.log("Enter Number to search in file ");

        } else
            console.log("Enter a number to search in file ");
    });
}
/**
 * write modified hashed numbers to output.txt
 * @param {*} newList 
 */
function writeBackToFile(newList){
    fs.writeFile(__dirname + '/output.txt', newList, (err) => { 
        if (err) throw err
        else console.log("New List with hashing written back to output.txt file");
        process.exit();
    }) 
}

/**
 * serah a number in hash table
 * It takes O(1) at best and O(n)in worst case
 * @param {*} n 
 */
function searchInHashTable(n) {
    let hashIndex = hashFunction(n);
    let ll = getHashChain(hashIndex);
    if (ll != undefined) {
        if (ll.indexOf(n) != -1) {
            console.log(`\n${n} is present in the file. Lets Delete it\n`);
            ll.remove(n);
            hashTable[hashIndex] = ll;
        } else {
            console.log(`\n${n} is not present in the file. Lets add it to the list\n`);
            ll.add(n);
            hashTable[hashIndex] = ll;
        }
    } else {
        console.log(`\n${n} is not present in the file. Lets add it to the list\n`);
        let ll = new OrderedList();
        ll.add(n);
        hashTable[hashIndex] = ll;
    }
    let newList=printHashTable();
    writeBackToFile(newList);
}

/**
 * Hash function to get index
 * @param {*} num 
 */
function hashFunction(num) {
    let hashIndex = num % 11;
    // console.log(`${hashIndex} - ${num}`);
    return hashIndex;
}

/**
 * set/add in linkedList at index returned by hash function
 */
function setHashTable(hashIndex, num) {
    let ll=getHashChain(hashIndex);

    if (ll == undefined) {
        let ll = new OrderedList();
        ll.add(num)
        hashTable[hashIndex] = ll;
    }
    else {
        // let ll = new OrderedList();
        let ll = hashTable[hashIndex];
        ll.add(num);
        hashTable[hashIndex]=ll;
    }
}

/**
 * @param {*} hashIndex 
 * @return Linkedlist at index in hashTable
 */
function getHashChain(hashIndex) {
    return hashTable[hashIndex];
}

function printHashTable() {
    let keys = hashTable.keys();
    let newList=''
    for (k of keys) {
        let llChain = new OrderedList();
        llChain = hashTable[k];
        let str = '';
        if (hashTable[k] == undefined) {
            str = '';
        } else {
            str = llChain.printList();
        }
        newList=newList+`${k} - ${str}\n`;
    }
    console.log(newList);
    return newList;
}