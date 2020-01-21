const fs = require('fs');
const OrderedList = require('./OrderedList');

let ll = new OrderedList();
let hashTable = [];
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

function writeBackToFile(newList){
    fs.writeFile(__dirname + '/output.txt', newList, (err) => { 
        if (err) throw err
        else console.log("New List with hashing written back to output.txt file");
        process.exit();
    }) 
}

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

function hashFunction(num) {
    let hashIndex = num % 11;
    // console.log(`${hashIndex} - ${num}`);
    return hashIndex;
}

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