class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
}

g = new Graph();
g.addVertex("Tokyo");
g.adjacencyList["Tokyo"].push("San Francisco");
