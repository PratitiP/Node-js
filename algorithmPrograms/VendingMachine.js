const util = require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

let n, amount=0;
let arrIn=[];
console.log("Enter Amount to get notes : ")
standard_input.on('data',(input)=>{
    n=parseInt(input.toString().trim());
    if(!Number.isInteger(parseInt(input.toString().trim()))){
        console.log("Not a valid number : ");
    }
    else
        arrIn.push(n);
    if(arrIn.length==1){
        noOfNotes=util.vendingMachine(n);
        console.log(`${n} will require minimum ${noOfNotes} notes`);
        process.exit();
    }

});