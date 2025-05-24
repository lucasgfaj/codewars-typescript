export default class Rodovias {
  private vertices: string[] = [];               // lista de vértices
  private arestas: { [key: string]: string[] } = {};  // mapa: vértice -> lista de vértices adjacentes

  public adiciona(vertex1: string, vertex2: string) {
    if (!this.vertices.includes(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.vertices.includes(vertex2)) {
      this.addVertex(vertex2);
    }

    this.addEdge(vertex1, vertex2);
  }

  public addVertex(vertex: string) {
    this.vertices.push(vertex);
    this.arestas[vertex] = [];
  }

  public addEdge(vertex1: string, vertex2: string) {
    // Evita adicionar aresta duplicada
    if (!this.arestas[vertex1].includes(vertex2)) {
      this.arestas[vertex1].push(vertex2);
    }
    if (!this.arestas[vertex2].includes(vertex1)) {
      this.arestas[vertex2].push(vertex1);
    }
  }

  public toString(): string {
    let result = "";
    this.vertices.forEach(vertex => {
      const visited: string[] = [];
      result += this.dfs(vertex, visited) + "\n";
    });
    return result;
  }

  public dfs(vertex: string, visited: string[]): string {
    if (visited.includes(vertex)) {
      return "";
    }
    visited.push(vertex);

    let result = vertex + " ";
    for (const vizinho of this.arestas[vertex]) {
      result += this.dfs(vizinho, visited);
    }
    return result;
  }
}

// Testando
let rodovias = new Rodovias();

rodovias.adiciona("a", "b");
rodovias.adiciona("a", "c");
rodovias.adiciona("b", "d");

console.log(rodovias.toString());
