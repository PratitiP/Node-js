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

    static binarySearch(items, value){
        items.sort();
        console.log(items);
        let left=0;
        let right=items.length-1;
        let middle=0;
        while(left<right){
            middle=Math.floor((left+right)/2);
            
            if(items[middle]==value) 
                return true;
            if(value>items[middle]){
                left=middle+1;
            }
            else if(value<items[middle]){
                right=middle-1; 
            }
        }
        return false;
    }

    static vendingMachine(amount){
        let notes=[1000,500,100,50,10,5,2,1];
        let i=0;
        let noOfNotes=0;
        for(i=0;i<notes.length;i++){
            if(amount/notes[i]!=0)
                {
                    let tempNotes = Math.floor(amount / notes[i]);   
                    noOfNotes = noOfNotes + tempNotes;
                    amount = amount % notes[i];
                }
            }
            console.log(`Minimum no of No of notes : ${noOfNotes}`)
        return noOfNotes;

    }
}
module.exports = Util;

// let arr=['hello','hi','bye','nice','good'];
// if(Util.binarySearch(arr,'nice'))
//     console.log(`item is present`);
// else
//     console.log(`item is not in list`);