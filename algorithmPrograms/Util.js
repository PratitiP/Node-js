/**
 * @description all static functions for reusability
 * @author Pratiti
 * @version 1.0.1
 */
class Util {
    /**
     * Check if two arguments are anagram or not
     */
    static isAnagram(string1, string2) {
        let string1Arr = string1.toString().split("").sort();
        let string2Arr = string2.toString().split("").sort();
        return (JSON.stringify(string1Arr) === JSON.stringify(string2Arr)) ? true :  false;
    }

    /**
     * returns true is number isprime
     * @param {*} n 
     */
    static isPrime(n) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    /**
     * Check if two arguments are palindrom 
     */
    static isPalindrome(n1, n2) {
        if (n1.toString().split("").reverse().join() == n2.toString().split("").join()) {
            return true;
        }
        return false;
    }

    /**
     * sort array in descending order - swaping
     * o(n2)
     */
    static bubbleSort(intArr) {
        for (let i = 0; i < intArr.length; i++) {
            for (let j = i + 1; j < intArr.length; j++) {
                if (intArr[i] > intArr[j]) {
                    let temp = intArr[i];
                    intArr[i] = intArr[j];
                    intArr[j] = temp;
                }
            }
        }
    }

    /**
     * sort using Insersion sort algorithm
     * @param {*} arr 
     */
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
    }

    /**
     * sort an array. use modified sort if number
     * otherwise use inbuilt sort
     * then search dividing in two arrays
     */
    static binarySearch(items, value) {
        //sort number or strings
        if(Number(value) || Number(value)==0){
            items.sort((a,b) => a - b);
        }
        else
            items.sort();

        let left = 0;
        let right = items.length - 1;
        while (left <= right) {
            let middle = parseInt((left + right) / 2);

            if (items[middle] == value) {
                return true;
            } else if (items[middle] < value) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return false;
    }

    /**
     * Vending machine returns minimum number of notes
     * @param {*} amount 
     */
    static vendingMachine(amount) {
        const notes = [1000, 500, 100, 50, 10, 5, 2, 1];
        let i = 0;
        let noOfNotes = 0;
        for (i = 0; i < notes.length; i++) {
            if (amount / notes[i] != 0) {
                let tempNotes = parseInt(amount / notes[i]);
                noOfNotes = noOfNotes + tempNotes;
                amount = amount % notes[i];
            }
        }
        return noOfNotes;

    }

    /**
     * merge sort with recussion
     * @param {*} arr 
     */
    static mergesort(arr) {
        function merge(leftArr, rightArr) {
        var sortedArr = [];
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr[0]);
                leftArr = leftArr.slice(1)
            } else {
                sortedArr.push(rightArr[0]);
                rightArr = rightArr.slice(1)
            }
        }
        while (leftArr.length) sortedArr.push(leftArr.shift());
        while (rightArr.length) sortedArr.push(rightArr.shift());
        return sortedArr;
    }


        if (arr.length < 2) {
            return arr;
        } else {
            let midpoint = parseInt(arr.length / 2);
            let leftArr = arr.slice(0, midpoint);
            let rightArr = arr.slice(midpoint, arr.length);
            return merge(Util.mergesort(leftArr), Util.mergesort(rightArr));
        }
    }



}
module.exports = Util;

