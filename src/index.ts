import Grafo from "./exercises/Grafos/Grafo";

// Criando o grafo
const grafo = new Grafo();

// Adicionando vértices
grafo.adicionarVertice("A");
grafo.adicionarVertice("B");
grafo.adicionarVertice("C");

// Adicionando arestas
grafo.adicionarAresta("A", "B");
grafo.adicionarAresta("A", "C");

// Exibindo o grafo
grafo.exibirGrafo();