interface INetwork<T> {
  add(vertex1: T, vertex2: T): void;
  getConnected(vertex: T): T[];
  getNotConnected(vertex: T): T[];
}

export class Network<T> implements INetwork<T> {
  private networkList: Map<T, T[]>;
  private typeAllowed: string | null = null;

  public constructor() {
    this.networkList = new Map();
  }

  private addVertex(vertex: T): void {
    const typeCurrent = typeof vertex;

    if (this.typeAllowed === null) {
      this.typeAllowed = typeCurrent;
    }

    if (typeCurrent !== this.typeAllowed) {
      throw new Error(
        `Tipo inválido! Esperado: ${this.typeAllowed}, recebido: ${typeCurrent}`
      );
    }

    if (!this.networkList.has(vertex)) {
      this.networkList.set(vertex, []);
    }
  }

  public add(vertex1: T, vertex2: T): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    if (!this.networkList.get(vertex1)!.includes(vertex2)) {
      this.networkList.get(vertex1)!.push(vertex2);
    }
    if (!this.networkList.get(vertex2)!.includes(vertex1)) {
      this.networkList.get(vertex2)!.push(vertex1);
    }
  }

  public getConnected(vertex: T): T[] {
    if (!this.networkList.has(vertex)) return [];

    const visited = new Set<T>();
    const result: T[] = [];

    visited.add(vertex);

    for (const neighbor of this.networkList.get(vertex) || []) {
      this.dfs(neighbor, visited, result);
    }

    return result;
  }

  private dfs(v: T, visited: Set<T>, result: T[]): void {
    if (visited.has(v)) return;

    visited.add(v);
    result.push(v);

    for (const neighbor of this.networkList.get(v) || []) {
      this.dfs(neighbor, visited, result);
    }
  }

  public getNotConnected(vertex: T): T[] {
    const connected = new Set(this.getConnected(vertex));
    let result = this.getVertices().filter(
      (v) => v !== vertex && !connected.has(v)
    );
    return result.sort();
  }

  private getVertices(): T[] {
    return Array.from(this.networkList.keys());
  }
}
