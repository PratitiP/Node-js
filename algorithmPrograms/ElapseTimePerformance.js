const util=require("./Util");

// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');
let count=1;
let problem=0;
let binarySearchList=[];
let part=0;

function main(){
    console.log("Select from following : ")
}
standard_input.on('data',(data)=>{
    let input=parseInt(data.toString().trim());
    switch(input){
    case 1 :
            problem=1;
            console.log("Enter insteger list sepereted by space for binary search : ");
            return;
    case 2 :
        console.log(binarySearchList);
        // util.binarySerach(binarySearchList);
        console.log("Enter Strings/words seperated by space for binary search : ")
        return;
    case 7 :
        process.exit();    
    }
    if(problem==1){
        binarySearchList=input.toString().trim().split(' ');
            var valid=true;
            binarySearchList.forEach((element,index) => {
                if(!Number.isInteger(parseInt(element)))
                    valid=false;
                else
                    binarySearchList[index]=parseInt(element);
            }); 
            if(valid){
                console.log("Enter no for Binary Search in above integer list : ");
                part=2;
                return;
            }
            else {
                console.log("SOmething wrong. Enter valid integer numbers seperated by space : ");
                return;
            }
    }
    if(part==2){
        console.log(input, binarySearchList);
        part=0;
        return;
    }
});