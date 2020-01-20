const LinkedList=require('./LinkedList');

// Queue class 
class QueueLL {
    // Array is used to implement a Queue 
    constructor() {
        this.items = new LinkedList();
    }

    // Functions or queue abstract data types

    // adding element to the queue 
    enqueue(element) {
        this.items.add(element);
    }

    // removing element from the queue returns underflow when called on empty queue 
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop(0);
    }

    // return true if the queue is empty. 
    isEmpty() {
        return this.items.size() == 0;
    }

    size(){
        return this.items.size();
    }

}

module.exports = QueueLL;