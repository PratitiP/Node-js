const Stack=require('./Stack');

function isPair(opening, closing)
{
	if(opening == '(' && closing == ')') return true;
	else if(opening == '{' && closing == '}') return true;
	else if(opening == '[' && closing == ']') return true;
	return false;
}

let arithmeticExp='(5+6)∗(7+8)/(4+3)(5+6)∗7+8)/(4+3)';   
let expStack=new Stack();
let balanced=true;
console.log(`Enter an arithmetic expression to validate`);

// Get process.stdin as the standard input object.
const standard_input = process.stdin;
standard_input.on('data',(data)=>{
    arithmeticExp=data.toString().trim();
    if(arithmeticExp.length){
        isBalanced();
        process.exit();
    }else  
        console.log(`Empty input. Enter an arithmetic expression to validate`);
});

function isBalanced(){
for(let i=0;i<arithmeticExp.length;i++){

    if(arithmeticExp[i]=='(' || arithmeticExp[i]=='[' || arithmeticExp[i]=='{' ){
        expStack.push(arithmeticExp[i]);
    }
    else if(arithmeticExp[i]==')' || arithmeticExp[i]==']' || arithmeticExp[i]=='}' ){
        if(expStack.isEmpty() ) {
            balanced=false;
            break;
        }else if(isPair(expStack.peek(),arithmeticExp[i])){
            expStack.pop();
        }
    }
}
if(expStack.isEmpty() && balanced)
    console.log(`Expression is balanced`);
else
    console.log(`Expression is not balanced`);
}