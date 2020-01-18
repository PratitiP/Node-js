const util=require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

let strArr=[];
console.log(`Enter Strings seperated by space for Merge Sort : `);

standard_input.on('data',(input)=>{
    let n=input.toString().trim();
    
    if(n.length!=0){
        strArray=n.split(' ');
        console.log(strArray)
        let sortedArr=util.mergesort(strArray);
        console.log(`Sorted String List using Merge sort : ${sortedArr}`);
        process.exit();
    }
    else{
        console.log("Empty List. Enter Strings seperated by space for Merge Sort : ")
    }
});

