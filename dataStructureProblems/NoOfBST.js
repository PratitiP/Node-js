/*
* @description: Number of binary trees using n nodes
*               calculated using a formula
* @author: pratiti
* @version: 1.0
* @date: 20/1/2020
*/ 
let inputArr = [];
let total = 0;
console.log('Enter number of test cases for count(BST) : ')
// Get process.stdin as the standard input object.
const standard_input = process.stdin;
standard_input.on('data', (data) => {

    let input = parseInt(data.toString().trim());

    if (Number.isInteger(input)) {
        if (inputArr.length == 0) {
            total = input;
            console.log(`Enter ${input} test cases - number of nodes to get Count(BST)`);
        }
        inputArr.push(input);
        if (inputArr.length == total+1) {
            getNoOfBST();
            process.exit();
        }
    } else
        console.log("Enter no for test Cases : ");

});

function getNoOfBST(){
    // console.log(inputArr);
    inputArr.shift();

    for(let i=0 ; i<inputArr.length ; i++){
        let countBST=getCountBST(inputArr[i]);
        console.log(`No of BST with ${inputArr[i]} nodes = ${countBST}`);
    }
}

/**
 * Number of BST formed using n nodes
 * @param {*} n 
 */
function getCountBST(n){
    count=Math.floor(factorial(2*n)/(factorial(n+1)*factorial(n)));
    return count;
}

/**
 * @param {*} number to get factorial
 * @retrun factorial
 */
function factorial(x){
    // validating the input
    x = parseInt(x, 10);
    if (isNaN(x)) return 1;
    
    // if x below 0, return 1
    if (x <= 0) return 1;
    // if x above 170, return infinity
    if (x > 170) return Infinity;
    // calculating the factorial
    var y = 1;
    for (var i = x; i>0; i--){
        y *= i;
    }
    return y;
}