class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v!== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v!== vertex1
        );
    }
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        }
        dfs(start);
        return result;
    }
    DFSIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currVertex;

        visited[start] = true;
        while(stack.length) {
            currVertex = stack.pop();
            result.push(currVertex);

            this.adjacencyList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    BFS(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currVertex;
        
        visited[start] = true;
        while(queue.length) {
            currVertex = queue.shift;
            result.push(currVertex);

            this.adjacencyList[currVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
    }
}

g = new Graph();
g.addVertex("Tokyo");
g.adjacencyList["Tokyo"].push("San Francisco");
