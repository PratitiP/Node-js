const LinkedList = require('./LinkedList');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

// linkedlist class 
class OrderedList extends LinkedList {
    constructor() {
        super();
        this.head = null;
        this.size = 0;
    }

    // add(data) 
    add(data) {
        // creates a new node 
        let node = new Node(data);
        let current, prev;


        // if list is Empty add the data and make it head 
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            prev = this.head;
            if (this.size == 1) {
                if (data < current.data) {
                    this.head = node;
                    node.next = current;
                    this.size++;
                    return;
                }
                prev.next=node;
            }
            else {
                while (prev.next) {
                    if (data < current.data) {
                        node.next = current;
                        prev.next = node;
                        this.size++;
                        return;
                    }
                    prev = current;
                    current = current.next;
                }
                prev.next = node;
            }
        }
        this.size++;
    }

}

module.exports = OrderedList;