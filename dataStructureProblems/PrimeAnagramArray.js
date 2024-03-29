/*
* @description: Store prime numbers in range 
*               Prime anagrams in one dimension
*               prime but not anagram on other dimension
* @author: pratiti
* @version: 1.0
* @date: 20/1/2020
*/ 
let primeArr = [[]];
let primeInRange = [];
let AP = [[]];
let AnagramPrime = [];
let NotAnagramPrime = [];

getPrimeNumbers();
getPrimeAnagramNumbers();
printPrimeAnagramNumbers();

//store prime numbers in 2D array
function getPrimeNumbers() {
    for (let i = 1; i <= 10; i++) {
        for (let j = i * 100 - 99; j <= i * 100; j += 2) {
            if (isPrime(j))
                primeInRange.push(j);
        }
        primeArr.push(primeInRange);
        primeInRange = [];
    }
}

/**
 * store prime anagram in one dimension of array
 * and others in 2nd dimension
 */
function getPrimeAnagramNumbers() {

    for (let i = 1; i <= 10; i++) {
        let arr = primeArr[i];
        for (j = 0; j < arr.length; j++) {
            let current = arr[j];

            //compare with all the elements in 2D array
            for (let k = 1; k <= 10; k++) {
                let arrComp = primeArr[k];
                var flagA = false;
                for (l = 0; l < arrComp.length; l++) {
                    if (isAnagram(current, arrComp[l]) && current != arrComp[l]) {
                        AnagramPrime.push(current);
                        flagA = true; break;
                    }
                }
                if (flagA)
                    break;
            }
            if (!flagA)
                NotAnagramPrime.push(current);
        }
    }

    AP.push(AnagramPrime);
    AP.push(NotAnagramPrime);
    // console.log(AnagramPrime.length + NotAnagramPrime.length);
}

//print prime anagrams from array
function printPrimeAnagramNumbers() {
    let str = '';
    let y=''
    for (let i = 1; i <= 2; i++) {
        str = str + `AP[${i-1}] Prime and ${y} Anagram : \n[ `;
        let arr = AP[i];
        for (j = 0; j < arr.length; j++) {
            str = str + arr[j] + ", ";
        }
        str = str + "]\n\n"
        arr = [];
        y='not'
    }
    console.log(str);
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

