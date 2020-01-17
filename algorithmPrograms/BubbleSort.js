const util=require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

let total=1;
let intArr=[];
console.log("How many numbers you want in a list to sort : ");

standard_input.on('data',(input)=>{
    let n=parseInt(input.toString().trim());
    if(!Number.isInteger(parseInt(input.toString().trim()))){
        console.log("Not a valid number : ");
    }else{
        intArr.push(n);
        if(intArr.length==1){ 
            total=n;
            console.log(`Enter ${total} numbers for Bubble Sort : `);
        }
    }
    if(intArr.length==(total+1)){
        intArr.shift();
        util.bubbleSort(intArr); //sorting by reference
        // util.insersionSort(intArr);
        process.exit();
    }
});

