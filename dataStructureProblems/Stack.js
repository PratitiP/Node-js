/*
* @file: Stack.js
* @description: Implementation of Stack with all methods
*               like push,pop,peek
*
* @author: pratiti
* @version: 1.0
* @date: 18/1/2020
*/ 
class Stack {

    constructor() {
        this.count = 0;
        this.storage = [];
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    size() {
        return this.count;
    }

    isEmpty(){
        if(this.count == 0)
            return true;
        else
            return false;
    }
}
module.exports = Stack; 

