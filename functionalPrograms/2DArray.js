// Get process.stdin as the standard input object.
const si = process.stdin;
si.setEncoding("utf-8");

let rows = 0;
let cols = 0;
let noOfElements = 2;
let iCount = 1;
let inputArr = [];
let array2D = [];

console.log("Number of rows columns: ");

si.on("data", input => {
  if (iCount == 1) {
    rows = parseInt(input.toString().trim());
    iCount++;
  } else if (iCount == 2) {
    cols = parseInt(input.toString().trim());
    noOfElements = rows * cols;
    console.log(noOfElements);
    console.log(`Enter ${noOfElements} elements : `);
    iCount++;
  } else if (iCount <= (noOfElements + 2)) {
    i = Number(input.toString().trim());
    inputArr.push(i);
    iCount++;
  } 
  if(iCount>(noOfElements+2)) {
    //initialize 2D array
    for (let i = 0; i < rows; i++) {
      array2D[i] = new Array(cols);
    }
    storeIn2DArray();
    print2DArray();
    process.exit();
  }

});

/**
 * store elements in 2D array
 */
function storeIn2DArray() {
  let k = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      array2D[i][j] = inputArr[k];
      k++;
    }
  }
}

/**
 * Print elements in 2D array
 */
function print2DArray() {
  console.log("Printing 2D array");
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      //console.log(array2D[i][j]);
      process.stdout.write(`${array2D[i][j]}\t`);
    }
    console.log();
  }
}
