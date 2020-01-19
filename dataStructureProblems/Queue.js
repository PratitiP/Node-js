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

    // returns the Front element of the queue without removing it. 
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    // return true if the queue is empty. 
    isEmpty() {

        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}


// creating object for queue class 
var queue = new Queue(); 
              
  
// Testing dequeue and pop on an empty queue 
// returns Underflow 
console.log(queue.dequeue()); 
  
// returns true 
console.log(queue.isEmpty()); 
  
// Adding elements to the queue 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
  
// returns 10 
console.log(queue.front()); 
  
// removes 10 from the queue 
console.log(queue.dequeue()); 
  
// returns 20 
console.log(queue.front()); 
  
// removes 20 
console.log(queue.dequeue()); 
  
// printing the elements of the queue 
console.log(queue.printQueue()); 
