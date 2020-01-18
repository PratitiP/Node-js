const util=require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

let total=1;
let strArr=[];
console.log("How many Strings you want in a list for Insersion sort : ");

standard_input.on('data',(input)=>{
    let n=input.toString().trim();
    
    strArr.push(n);
        if(strArr.length==1){ 
            total=n;
            console.log(`Enter ${total} Strings seperated by space for Insersion Sort : `);
        }
    
    if(strArr.length==2){
        strArr.shift();
        //sorting by reference
        strArray=strArr[0].split(' ');
        console.log(strArray)
        util.insersionSort(strArray);
        console.log(`Sorted String List using Insertion sort : ${strArray}`);
        process.exit();
    }
});

