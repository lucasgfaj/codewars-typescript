class Nodes {
  public value: any;
  public neighbors: Nodes[];

  public constructor(value: any) {
    this.value = value;
    this.neighbors = [];
  }

  public addNeighbor(node: Nodes) {
    this.neighbors.push(node);
  }

  public getNeighbors(): any[] {
    return this.neighbors.map(neighbor => neighbor.value);
  }
}

export class NetworkWithNode {
  private nodes: Map<any, Nodes>;

  constructor() {
    this.nodes = new Map();
  }

  private getNode(value: any): Nodes {
    if (!this.nodes.has(value)) {
      this.nodes.set(value, new Nodes(value));
    }
    return this.nodes.get(value)!;
  }

  public addEdge(sourceValue: any, destValue: any) {
    const sourceNode = this.getNode(sourceValue);
    const destNode = this.getNode(destValue);

    sourceNode.addNeighbor(destNode);
    destNode.addNeighbor(sourceNode);
  }

public getConnected(value: any): any[] {
    if (!this.nodes.has(value)) return [];
    const visited = new Set<any>();
    const result: any[] = [];

    const dfs = (v: any) => {
        if (visited.has(v)) return;
        visited.add(v);
        result.push(v);
        const node = this.nodes.get(v);
        if (!node) return;
        for (const neighbor of node.neighbors) {
            dfs(neighbor.value);
        }
    };

    dfs(value);
    return result.sort();
}

  public getNotNeighbors(value: any): any[] {
    const node = this.nodes.get(value);
    if (!node) return [];
    const allNodes = Array.from(this.nodes.keys());
    const neighbors = node.getNeighbors();
    return allNodes.filter(v => v !== value && !neighbors.includes(v));
  }

  public printGraph() {
    for (const [value, node] of this.nodes.entries()) {
      const neighbors = node.getNeighbors().join(", ");
      console.log(`${value} -> ${neighbors}`);
    }
  }
}

