class Util{
 
    static isAnagram(string1,string2){
        console.log(string1);
        console.log(string2);
        let string1Arr=string1.toString().split('').sort();
        let string2Arr=string2.toString().split('').sort();
        console.log(string1Arr)
        console.log(string2Arr);
        if(JSON.stringify(string1Arr) == JSON.stringify(string2Arr)){
            
            // console.log("true")
            return true;
        }
        return false;
    }

    static isPrime(n){
        for(let i=2 ; i<=(n/2) ; i++){
            if((n%i) == 0)
                return false;
        }
        return true;
    }

    static isPalindrome(n1,n2){
        console.log(n1.toString().split('').reverse().join());
        if(n1.toString().split('').reverse().join() == n2.toString().split('').join()){
            return true;
        }
        return false;
    }

}
//console.log(Util.isPrime(40));
//console.log(Util.isAnagram("abc","cab"));
console.log(Util.isPalindrome(1221,1221));
module.exports = Util;