// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

let inputArr=[];
console.log("Enter a b c for quadratic equation : ")
standard_input.on('data',(input)=>{
    inputArr.push(parseInt(input.toString().trim()));
    if(inputArr.length==3){
        getQuadraticRoots();
        process.exit();
    }
});

function getQuadraticRoots(){
    let a=inputArr[0];
    let b=inputArr[1];
    let c=inputArr[2];
    let delta=Math.abs(b*b-4*a*c);
    let root1 = ( (-1 * b) + Math.sqrt(delta)) / (2*a);
    let root2 = ( (-1 * b) - Math.sqrt(delta)) / (2*a);
    console.log(`Roots of equation : ${a}x*x+${b}x+${c}\nRoot1 = ${root1}   Root2= ${root2}`);
}