// Get process.stdin as the standard input object.
const standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

standard_input.on('data',(input)=>{
    allPermutations=getAllPermutationsRecusively(input.toString().trim());
    console.log(allPermutations);
    process.exit();
});

function getAllPermutationsRecusively(string) {
    let results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let innerPermutations = getAllPermutationsRecusively(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }
