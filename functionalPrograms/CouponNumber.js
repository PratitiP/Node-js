// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding("utf-8");

let N = 0;
let randCount=0;
let arr=[];
standard_input.on("data", n => {
  N = parseInt(n.toString().trim());
  let i = 0;
  while (i < N) {
    let rand = getRandomInt(100, 200);
    isDistinct = checkDistinct(rand);
    if(isDistinct<0){
        arr.push(rand);
        i++;
    }
    randCount++;        
  }
  console.log(arr);
  console.log(`It took ${randCount} times to generate ${N} distinct Random numbaers`);
  process.exit();

});

function checkDistinct(rand){
    return arr.indexOf(rand);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
