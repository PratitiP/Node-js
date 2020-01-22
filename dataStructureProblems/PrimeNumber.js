/*
* @description: Store prime numbers in range 
*               range in one dimension
*               prime numbers in that range in another dimension
* @author: pratiti
* @version: 1.0
* @date: 20/1/2020
*/ 
let primeArr = [[]];
let primeInRange = [];
getPrimeNumbers();
printPrimeNumbers();

/**
 * Store prime numbers in 2D array by range
 */
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

//print prime numbers in 2D array
function printPrimeNumbers() {
    // console.log(primeArr);
    let str = '';
    for (let i = 1; i <= 10; i++) {
        str = str + "(" + `${i*100-99}` + "-" + `${i*100}` + ")" + " \t ";
        let arr = primeArr[i];
        for (j = 0; j < arr.length; j++) {
            str = str + arr[j] + ", ";
        }
        str = str + "\n\n"
        arr = [];
    }
    console.log(str);
}

/**
 * @return true if number is prime
 * @param {*} n 
 */
function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}