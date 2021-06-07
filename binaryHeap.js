// max binary heap implementation

class maxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        // reach out to the parent
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(element <= parent) {
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}

let heap = new maxBinaryHeap();
heap.insert(55);