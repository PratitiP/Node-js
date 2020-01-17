const util=require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');
console.log("Enter a Number : ");
let arrIn=[];

standard_input.on('data',(input)=>{
    let n=parseInt(input.toString().trim());
    if(!Number.isInteger(parseInt(input.toString().trim()))){
        console.log("Not a valid number : ");
    }
    else
        arrIn.push(n);
    if(arrIn.length==1){
        let isPrime=util.isPrime(n);
        if(isPrime)
            console.log(`${n} is prime number`);
        else
            console.log(`${n} is not a prime number`);
        process.exit();
    }
});