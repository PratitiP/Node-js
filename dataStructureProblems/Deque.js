class Deque{

    // Array is used to implement a Queue 
    constructor() {
        this.items = [];
    }

    // Functions or queue abstract data types

    //add front
    addFront(element){
        this.items.splice(0,0,element);
    }

    // adding element to the queue 
    addRear(element) {
        this.items.push(element);
    }

    // remove element from the queue returns underflow when called on empty queue 
    removeFront() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    //remove last item in the queue
    removeRear(){
        if (this.isEmpty())
            return "Underflow";
        return this.items.pop();
    }

    // return true if the queue is empty. 
    isEmpty() {
        return this.items.length == 0;
    }

    size(){
        return this.items.length;
    }
}

module.exports = Deque ;