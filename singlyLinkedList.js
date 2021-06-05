class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!head) return undefined;
        var curr = this.head;
        var newTail = curr;
        while(curr.next) {
            newTail = curr;
            curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return curr;
    }
    shift() {
        if(!head) return undefined;
        var currHead = this.head;
        this.head = currHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
var list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.pop();


