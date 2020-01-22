/*
* @description: Store prime numbers in range using Queue of linkedlist
*               range in one dimension
* @author: pratiti
* @version: 1.0
* @date: 20/1/2020
*/ 
const Queue=require('./Queue');
const LinkedList=require('./LinkedList');

let primeQueue = new Queue();
let primeAnagramLL = new LinkedList();
let primeArr = [[]];

getPrimeNumbers();
getPrimeAnagramNumbers();
printPrimeAnagramNumbers();


function getPrimeAnagramNumbers() {
    for (let i = 1; i <= 10; i++) {
        let arr = primeArr[i];
        for (j = 0; j < arr.length; j++) {
            let current = arr[j];
            for (let k = 1; k <= 10; k++) {
                let arrComp = primeArr[k];
                var flagA = false;
                for (l = 0; l < arrComp.length; l++) {
                    if (isAnagram(current, arrComp[l]) && current != arrComp[l]) {
                        
                        primeAnagramLL.add(current);           //add to linked list
                        flagA = true; break;
                    }
                }
                if (flagA)
                    break;
            }
            primeQueue.enqueue(primeAnagramLL);
            primeAnagramLL=new LinkedList();
        }
    }
}

function getPrimeNumbers() {
    for (let i = 1; i <= 10; i++) {
        let primeInRange = [];
        for (let j = i * 100 - 99; j <= i * 100; j += 2) {
            if (isPrime(j))
                primeInRange.push(j);
        }
        primeArr.push(primeInRange);
    }
}

//print prime anagrams using deque linkedllists
function printPrimeAnagramNumbers(){
    let str='';
    while(!primeQueue.isEmpty()){
        let ll=primeQueue.dequeue();
        str = str + ll.printList(); 
    }
    console.log(`\nPrime Anagrams in reverse order using Queue of linkedList : \n\n ${str}\n`);
}

/**
 * @returns true is number is prime
 * @param {*} number
 */
function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

/**
 * @returns true is numberfs arfe anagrams
 * @param {*} string1
 * @param {*} string2
 */
function isAnagram(string1, string2) {
    let string1Arr = string1.toString().split("").sort();
    let string2Arr = string2.toString().split("").sort();
    if (JSON.stringify(string1Arr) == JSON.stringify(string2Arr)) {
        return true;
    }
    return false;
}

