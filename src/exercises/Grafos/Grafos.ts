// Tipo básico de vértice e aresta/arco
type Vertice = number;  // índice do vértice
type Aresta = [Vertice, Vertice];
type ArestaPonderada = [Vertice, Vertice, number];

////////////////////////////////////////////////////////////
// (a) Matriz de Incidência vértice-aresta (não direcionada)
class MatrizIncidencia {
  V: number;
  E: number;
  matriz: number[][];

  constructor(V: number, arestas: Aresta[]) {
    this.V = V;
    this.E = arestas.length;
    this.matriz = [];

    // Inicializa matriz V x E com zeros
    for (let i = 0; i < V; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < this.E; j++) {
        this.matriz[i][j] = 0;
      }
    }

    // Preenche matriz: 1 se vértice i está conectado pela aresta j
    for (let j = 0; j < this.E; j++) {
      let u = arestas[j][0];
      let v = arestas[j][1];
      this.matriz[u][j] = 1;
      this.matriz[v][j] = 1;
    }
  }

  print() {
    for (let i = 0; i < this.V; i++) {
      let linha = "";
      for (let j = 0; j < this.E; j++) {
        linha += this.matriz[i][j] + " ";
      }
      console.log(linha);
    }
  }
}

////////////////////////////////////////////////////////////
// (b) Matriz de Incidência nó-arco (direcionada)
class MatrizIncidenciaDirecionada {
  V: number;
  E: number;
  matriz: number[][];

  constructor(V: number, arcos: Aresta[]) {
    this.V = V;
    this.E = arcos.length;
    this.matriz = [];

    // Inicializa matriz V x E com zeros
    for (let i = 0; i < V; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < this.E; j++) {
        this.matriz[i][j] = 0;
      }
    }

    // Preenche matriz: -1 para nó origem, 1 para nó destino, 0 caso contrário
    for (let j = 0; j < this.E; j++) {
      let origem = arcos[j][0];
      let destino = arcos[j][1];
      this.matriz[origem][j] = -1;  // saída
      this.matriz[destino][j] = 1;  // entrada
    }
  }

  print() {
    for (let i = 0; i < this.V; i++) {
      let linha = "";
      for (let j = 0; j < this.E; j++) {
        linha += this.matriz[i][j] + " ";
      }
      console.log(linha);
    }
  }
}

////////////////////////////////////////////////////////////
// (c) Matriz de Adjacência (vértice-vértice)
class MatrizAdjacencia {
  V: number;
  matriz: number[][];

  constructor(V: number, arestas: ArestaPonderada[], direcionado = false) {
    this.V = V;
    this.matriz = [];

    // Inicializa matriz V x V com zeros
    for (let i = 0; i < V; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < V; j++) {
        this.matriz[i][j] = 0;
      }
    }

    // Preenche matriz com peso ou 1 para arestas
    for (let k = 0; k < arestas.length; k++) {
      let u = arestas[k][0];
      let v = arestas[k][1];
      let w = arestas[k][2] !== undefined ? arestas[k][2] : 1;

      this.matriz[u][v] = w;
      if (!direcionado) {
        this.matriz[v][u] = w;
      }
    }
  }

  print() {
    for (let i = 0; i < this.V; i++) {
      let linha = "";
      for (let j = 0; j < this.V; j++) {
        linha += this.matriz[i][j] + " ";
      }
      console.log(linha);
    }
  }
}

////////////////////////////////////////////////////////////
// (d) Lista de Arcos (arestas)
class ListaDeArcos {
  arcos: ArestaPonderada[];
  direcionado: boolean;

  constructor(arcos: ArestaPonderada[], direcionado = false) {
    this.arcos = arcos;
    this.direcionado = direcionado;
  }

  print() {
    for (let i = 0; i < this.arcos.length; i++) {
      let arco = this.arcos[i];
      if (arco.length === 3) {
        console.log(`(${arco[0]}, ${arco[1]}, peso=${arco[2]})`);
      } else {
        console.log(`(${arco[0]}, ${arco[1]})`);
      }
    }
  }
}

////////////////////////////////////////////////////////////
// (e) Lista de Adjacência
class ListaAdjacencia {
  V: number;
  lista: Array<Array<[Vertice, number]>>; // par (vizinho, peso)

  constructor(V: number, arestas: ArestaPonderada[], direcionado = false) {
    this.V = V;
    this.lista = [];

    // Inicializa lista vazia para cada vértice
    for (let i = 0; i < V; i++) {
      this.lista[i] = [];
    }

    // Preenche lista de adjacência
    for (let i = 0; i < arestas.length; i++) {
      let u = arestas[i][0];
      let v = arestas[i][1];
      let w = arestas[i][2] !== undefined ? arestas[i][2] : 1;

      this.lista[u].push([v, w]);
      if (!direcionado) {
        this.lista[v].push([u, w]);
      }
    }
  }

  print() {
    for (let i = 0; i < this.V; i++) {
      let linha = `${i}: `;
      for (let j = 0; j < this.lista[i].length; j++) {
        let [v, w] = this.lista[i][j];
        linha += `(${v}, peso=${w}) `;
      }
      console.log(linha);
    }
  }
}

const V = 4;
const arestasNaoDir: Aresta[] = [
  [0, 1],
  [0, 2],
  [1, 3],
];

const arcosDir: Aresta[] = [
  [0, 1],
  [2, 0],
  [1, 3],
];

const arestasPonderadas: ArestaPonderada[] = [
  [0, 1, 2],
  [0, 2, 4],
  [1, 3, 1],
];

// (a)
const mi = new MatrizIncidencia(V, arestasNaoDir);
mi.print();
console.log("----");

// (b)
const mid = new MatrizIncidenciaDirecionada(V, arcosDir);
mid.print();
console.log("----");

// (c)
const ma = new MatrizAdjacencia(V, arestasPonderadas, false);
ma.print();
console.log("----");

// (d)
const la = new ListaDeArcos(arestasPonderadas, false);
la.print();
console.log("----");

// (e)
const ladj = new ListaAdjacencia(V, arestasPonderadas, false);
ladj.print();
