class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        var newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var curr = this.root;
            while (true) {
                if(value === curr.val) return undefined;
                if(val <  curr.val) {
                    if(curr.left === null) {
                        curr.left = newNode;
                        return this;
                    } else {
                        curr = curr.left;
                    }
                } else if(val > curr.val) {
                    if(curr.right === null) {
                        curr.right = newNode;
                        return this;
                    } else {
                        curr = curr.right;
                    }
                }
            }
        }
    }
    find(val) {
        if(this.root === null) return undefined;
        var curr = this.root;
        var found = false;
        while(curr && !found) {
            if(val <  curr.val) {
                curr = curr.left;
            } else if(val > curr.val) {
                curr = curr.right;
            } else {
                found = true;
                return found;
            }
        }
        return found; // will be false if not there
        return curr;
    }
    BFS() {
        var node = this.root;
        var data = [];
        var queue = [];

        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);