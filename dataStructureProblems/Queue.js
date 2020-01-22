/*
* @file: Queue.js
* @description: Implementation of Queue with all methods
*               like queue, enqueue, dequeue, isEmpty, size
*
* @author: pratiti
* @version: 1.0
* @date: 19/1/2020
*/ 
class Queue {
    // Array is used to implement a Queue 
    constructor() {
        this.items = [];
    }

    // Functions or queue abstract data types

    // adding element to the queue 
    enqueue(element) {
        this.items.push(element);
    }

    // removing element from the queue returns underflow when called on empty queue 
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // return true if the queue is empty. 
    isEmpty() {
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }

}

module.exports = Queue;