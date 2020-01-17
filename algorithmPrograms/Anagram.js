const util=require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');
console.log("Enter strings : ")
let inputArr=[];
standard_input.on('data',(input)=>{
    if(!isNaN(Number(input.toString().trim()))){
        console.log("Enter a valid string : ")
    }else{
        inputArr.push(input.toString().trim());
    }
    if(inputArr.length==2){
        let isAnagram=util.isAnagram(inputArr[0],inputArr[1]);
        if(isAnagram)
            console.log("Strings are Anagram");
        else
            console.log("Not Anagram");
        process.exit();
    }
});
