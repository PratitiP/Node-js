const util = require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');
console.log("Enter a Number : ");
let arrIn = [];

standard_input.on('data', (input) => {
    let n = parseInt(input.toString().trim());
    if (!Number.isInteger(parseInt(input.toString().trim()))) {
        console.log("Not a valid number : ");
    }
    else {
        arrIn.push(n);
        var isPrime = util.isPrime(n);
        if (isPrime)
            console.log(`${n} is prime number`);
        else
            console.log(`${n} is not a prime number`);
    }
    if (arrIn.length == 2) {
        if (isPrime) {
            let isAnagram = util.isAnagram(arrIn[0], arrIn[1]);
            if (isAnagram) {
                console.log("Numbers are Anagram");
                let isPalindrome = util.isPalindrome(arrIn[0], arrIn[1]);
                if (isPalindrome)
                    console.log(`Numbers are Palindrome`);
                else
                    console.log(`Numbers are not Palindrome`);
            }
        }
        process.exit();
    }
});