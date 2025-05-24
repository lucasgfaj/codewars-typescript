export default class Grafo {
    private listaAdjacencia: Map<string, string[]>;

    constructor(){
      this.listaAdjacencia = new Map();
    }

      // Adiciona um vértice
  adicionarVertice(vertice: string): void {
    if (!this.listaAdjacencia.has(vertice)) {
      this.listaAdjacencia.set(vertice, []);
    }
  }

  // Adiciona uma aresta entre dois vértices
  adicionarAresta(vertice1: string, vertice2: string): void {
    this.listaAdjacencia.get(vertice1)?.push(vertice2);
    this.listaAdjacencia.get(vertice2)?.push(vertice1); // Não orientado
  }

  // Mostra o grafo
  exibirGrafo(): void {
    for (let [vertice, vizinhos] of this.listaAdjacencia) {
      console.log(`${vertice} -> ${vizinhos.join(", ")}`);
    }
  }
}


// // Criando o grafo
// const grafo = new Grafo();

// // Adicionando vértices
// grafo.adicionarVertice("A");
// grafo.adicionarVertice("B");
// grafo.adicionarVertice("C");

// // Adicionando arestas
// grafo.adicionarAresta("A", "B");
// grafo.adicionarAresta("A", "C");

// // Exibindo o grafo
// grafo.exibirGrafo();