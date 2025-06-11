interface INetwork<T> {
  addEdge(vertex1: T, vertex2: T): void;
  getConnected(vertex: T): T[];
  getNotConnected(vertex: T): T[];
}

export class Network<T> implements INetwork<T> {
  private adjacencyList: Map<T, T[]> = new Map();

  private addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  public addEdge(vertex1: T, vertex2: T): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    if (!this.adjacencyList.get(vertex1)!.includes(vertex2)) {
      this.adjacencyList.get(vertex1)!.push(vertex2);
    }
    if (!this.adjacencyList.get(vertex2)!.includes(vertex1)) {
      this.adjacencyList.get(vertex2)!.push(vertex1);
    }
  }
  
  public getConnected(vertex: T): T[] {
    if (!this.adjacencyList.has(vertex)) return [];
    const visited = new Set<T>();
    const result: T[] = [];

    const dfs = (v: T) => {
      if (visited.has(v)) return;
      visited.add(v);
      for (const neighbor of this.adjacencyList.get(v) || []) {
        if (!visited.has(neighbor)) {
          result.push(neighbor);
          dfs(neighbor);
        }
      }
    };
    dfs(vertex);
   
    return result.sort();
  }

  public getNotConnected(vertex: T): T[] {
    const allVertices = this.getVertices();
    const connected = new Set(this.getConnected(vertex));
    let result = allVertices.filter((v) => v !== vertex && !connected.has(v));
    return result.sort();
  }
 
  private getVertices(): T[] {
    return Array.from(this.adjacencyList.keys());
  }
}
