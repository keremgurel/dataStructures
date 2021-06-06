// Array Implementation
var q = [];
q.push("first");
q.push("second");
q.push("third");
// we need to remove from beginning, so shift
q.shift();
// removing from beggining means every item needs to be reindexed
// better way, combine unshift with pop to get FIFO
q.unshift("first");
q.unshift("second");
q.unshift("third");
q.pop();

// linked list Implementation

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this,last = null;
        this.size;
    }
    enqueue(val) {
        // add to the end
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        // remove from beggining
        if(!this.first) return null;
        var tmp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return tmp.val;
    }
}