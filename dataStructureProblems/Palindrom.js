/*
* @description: It checks whether the input is palindrome or not using deque method
*
* @author: pratiti
* @version: 1.0
* @date: 20/1/2020
*/
const Deque = require('./Deque');

let deque = new Deque();

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

console.log(`\nEnter a string to check if it is a palindrom or not`);
standard_input.on('data', (data) => {
    let input = data.toString().trim();

    if (input.length != 0) {
        for (let i=0 ; i < input.length ; i++) {
            deque.addRear(input[i]);
        }
        checkPalindrom();
        process.exit();
    } else
        console.log("Enter some string to check if it is palindrom or not. ");
});

/**
 * Check if string is palindrom using removeFront and removeRear
 */
function checkPalindrom() {
    for (let i=0; i < deque.size() / 2 ; i++) {
        if (deque.removeFront() != deque.removeRear()) {
            console.log(`String is not Palindrom`);
            return;
        }
    }
    console.log(`String is Palindrom`);

}