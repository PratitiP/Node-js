let primeArr = [
    []
];
let primeInRange = [];
getPrimeNumbers();
printPrimeNumbers();

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

function isPrime(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}