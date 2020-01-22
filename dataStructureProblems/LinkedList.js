/*
* @file: LinkedList.js
* @description: Implementation of linked list with all methods
*               like add,removeFrom,removeElement,addAtfirst,size
*
* @author: pratiti
* @version: 1.0
* @date: 20/1/2020
*/ 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

// linkedlist class 
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    // add(data) 
    add(data) {
        // creates a new node 
        let node = new Node(data);
        let current;

        // if list is Empty add the data and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // insert data at the index of the list 
    insertAt(data, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            let node = new Node(data);
            let curr, prev;

            curr = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let it = 0;
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removes an data from the specified location 
    pop(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first data 
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                // remove the data 
                prev.next = curr.next;
            }
            this.size--;
            // return the remove data 
            return curr.data;
        }
    }

    // comparing data with current data if found then remove the and return true 
    remove(data) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.data === data) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    // finds the index of data 
    indexOf(data) {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.data === data)
                return count;
            count++;
            current = current.next;
        }
        // not found 
        return -1;
    }

    size() {
        // console.log(this.size);
        return this.size;
    }

    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.data + ",";
            curr = curr.next;
        }
        // console.log(str);
        return str;
    }
}

module.exports = LinkedList;

