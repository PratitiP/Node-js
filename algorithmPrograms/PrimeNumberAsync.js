const readline = require('readline');
const util = require('./Util');

const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout 
    });

function inputSync() {
     async function* getLine() {
        for await (const line of rl) {
            yield line;
        }
    }
    const getLineGen=getLine();
    return async () => ((await getLineGen.next()).value);
};

const getLine = inputSync();

async function main () {
    console.log("Enter a number to check Prime or Not : ")
    let num = Number(await getLine());
    if(util.isPrime(num))
        console.log("Number is Prime");
    else
        console.log("Number is Not a prime number");

    process.exit(0);
};

main();