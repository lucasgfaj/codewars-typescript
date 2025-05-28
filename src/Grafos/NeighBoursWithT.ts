interface IGraph<T> {
  addVertex(vertex: T): void;
  addEdge(vertex1: T, vertex2: T): void;
  getNeighbors(vertex: T): T[];
  getNotNeighbors(vertex: T): T[];
  getVertices(): T[];
  printGraph(): void;
}

export class Graph<T> implements IGraph<T> {
  private adjacencyList: Map<T, T[]> = new Map();

  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: T, vertex2: T): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    if (!this.adjacencyList.get(vertex1)!.includes(vertex2)) {
      this.adjacencyList.get(vertex1)!.push(vertex2);
    }
    if (!this.adjacencyList.get(vertex2)!.includes(vertex1)) {
      this.adjacencyList.get(vertex2)!.push(vertex1);
    }
  }

  getNeighbors(vertex: T): T[] {
    return this.adjacencyList.get(vertex) || [];
  }

  getNotNeighbors(vertex: T): T[] {
    const allVertices = this.getVertices();
    const neighbors = new Set(this.getNeighbors(vertex));

    return allVertices.filter((v) => v !== vertex && !neighbors.has(v));
  }

  getVertices(): T[] {
    return Array.from(this.adjacencyList.keys());
  }

  printGraph(): void {
    console.log("Representação do Grafo (Lista de Adjacências):");
    this.adjacencyList.forEach((neighbors, vertex) => {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    });
  }
}
