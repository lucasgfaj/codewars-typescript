type Aresta = {
  destino: string;
  peso?: number;
};

export default class Grafo {
  private listaAdj: Map<string, Aresta[]> = new Map();
  private direcionado: boolean;

  constructor(direcionado: boolean = false) {
    this.direcionado = direcionado;
  }

  adicionarVertice(v: string): void {
    if (!this.listaAdj.has(v)) {
      this.listaAdj.set(v, []);
    }
  }

  adicionarAresta(origem: string, destino: string, peso?: number): void {
    this.adicionarVertice(origem);
    this.adicionarVertice(destino);
    this.listaAdj.get(origem)!.push({ destino, peso });

    if (!this.direcionado) {
      this.listaAdj.get(destino)!.push({ destino: origem, peso });
    }
  }

  mostrarGrafo(): void {
    for (const [vertice, arestas] of this.listaAdj) {
      const conexoes = arestas.map(a => a.peso !== undefined ? `${a.destino}(${a.peso})` : a.destino);
      console.log(`${vertice} → ${conexoes.join(', ')}`);
    }
  }
}

// const grafo = new Grafo(true); // true = direcionado
// grafo.adicionarAresta('A', 'B', 2);
// grafo.adicionarAresta('A', 'C', 4);
// grafo.adicionarAresta('B', 'C', 1);
// grafo.mostrarGrafo();
