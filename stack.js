// Array implementation
var stack = [];

stack.push("Can");
stack.push("Kerem");
stack.push("Gurel");

stack.pop();

// Singly Linked List implementation
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var tmp = this.first;
            this.first = newNode;
            this.first.next = tmp;
        }
        return ++this.size;
    }
    pop() {
        if(!this.first) {
            return null;
        } else {
            var tmp = this.first;
            // if there is only one thing
            if (this.first == this.last) {
                this.last = null;
            }
            this.first = this.first.next;
            this.size--;
            return tmp.val;
        }
    }
}