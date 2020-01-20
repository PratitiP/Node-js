// Queue class 
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

    // // returns the Front element of the queue without removing it. 
    // front() {
    //     if (this.isEmpty())
    //         return "No elements in Queue";
    //     return this.items[0];
    // }


    // printQueue() {
    //     var str = "";
    //     for (var i = 0; i < this.items.length; i++)
    //         str += this.items[i] + " ";
    //     return str;
    // }

}

module.exports = Queue;