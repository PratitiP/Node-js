class Util {
    static isAnagram(string1, string2) {
        let string1Arr = string1
            .toString()
            .split("")
            .sort();
        let string2Arr = string2
            .toString()
            .split("")
            .sort();
        if (JSON.stringify(string1Arr) == JSON.stringify(string2Arr)) {
            return true;
        }
        return false;
    }

    static isPrime(n) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    static isPalindrome(n1, n2) {
        if (n1.toString().split("").reverse().join() == n2.toString().split("").join()) {
            return true;
        }
        return false;
    }

    static bubbleSort(intArr) {
        console.log(intArr);
        for (let i = 0; i < intArr.length; i++) {
            for (let j = i + 1; j < intArr.length; j++) {
                if (intArr[i] > intArr[j]) {
                    let temp = intArr[i];
                    intArr[i] = intArr[j];
                    intArr[j] = temp;
                }
            }
        }
        console.log(`Sorted Integer List using bubble Sort : ${intArr} `);
    }

    /*Function to sort array using insertion sort*/
    static insersionSort(arr) {
        let n = arr.length;
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        console.log(`Sorted Integer List using Insertion sort : ${arr}`);
    }
}
module.exports = Util;

// strArr=['abd','xfsf','pqr','hij','abcde'];
// Util.bubbleSort(strArr);

