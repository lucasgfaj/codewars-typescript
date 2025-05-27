/**
 * A estrutura de dados grafo é um conceito fundamental na ciência da computação
 * e é utilizada em diversos domínios, como redes sociais, sistemas de transporte e redes de computadores.
 *
 * Um grafo é uma coleção de nós conectados por arestas, onde cada nó representa uma entidade,
 * e cada aresta representa um relacionamento entre duas entidades.
 * Neste artigo, discutiremos como implementar uma estrutura de dados grafo em TypeScript e realizar BFS e DFS sobre ela.
 */

/**
 * Implementando a Estrutura de Dados Grafo em TypeScript
 * 
 * Em TypeScript, podemos implementar um grafo usando classes.
 * Definiremos duas classes, Node e Graph, para representar um nó e o grafo, respectivamente.
 *
 * A classe Node terá duas propriedades: value e neighbors:
 * - value armazenará o valor do nó.
 * - neighbors armazenará um array com os nós vizinhos.
 */

class GraphNode {
  value: any;
  neighbors: GraphNode[];

  constructor(value: any) {
    this.value = value;
    this.neighbors = [];
  }

  // Adiciona um nó vizinho à lista de vizinhos
  addNeighbor(node: GraphNode) {
    this.neighbors.push(node);
  }
}

/**
 * A classe Graph terá uma propriedade nodes, que armazenará todos os nós do grafo.
 * Ela também terá dois métodos:
 * - addNode: para adicionar um nó ao grafo.
 * - addEdge: para adicionar uma aresta (conexão) entre dois nós.
 */

class Graph {
  nodes: GraphNode[];

  constructor() {
    this.nodes = [];
  }

  // Adiciona um novo nó ao grafo
  addNode(value: any) {
    const node = new GraphNode(value);
    this.nodes.push(node);
    return node; // Retorna o nó criado para facilitar a criação de arestas
  }

  // Adiciona uma aresta entre dois nós (bidirecional)
  addEdge(source: GraphNode, destination: GraphNode) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}

/**
 * Percorrendo o Grafo: Busca em Largura (BFS)
 *
 * A Busca em Largura (Breadth-First Search) é um algoritmo de travessia de grafo
 * que visita todos os nós em ordem de largura, ou seja, visita todos os nós de um nível
 * antes de passar para o próximo.
 */

function bFs(startNode: GraphNode) {
  const visited: Set<GraphNode> = new Set(); // Conjunto de nós visitados
  const queue: GraphNode[] = []; // Fila para visitar os nós

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!; // Remove o primeiro da fila
    console.log(currentNode.value); // Mostra o valor do nó

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Marca como visitado
        queue.push(neighbor);  // Adiciona à fila
      }
    }
  }
}

/**
 * Percorrendo o Grafo: Busca em Profundidade (DFS)
 *
 * A Busca em Profundidade (Depth-First Search) é um algoritmo de travessia de grafo
 * que visita todos os nós de um ramo antes de ir para o próximo.
 */

function dFs(startNode: GraphNode) {
  const visited: Set<GraphNode> = new Set(); // Conjunto de nós visitados
  const stack: GraphNode[] = []; // Pilha para visitar os nós

  stack.push(startNode);

  while (stack.length > 0) {
    const currentNode = stack.pop()!; // Remove o topo da pilha

    if (!visited.has(currentNode)) {
      console.log(currentNode.value); // Mostra o valor do nó
      visited.add(currentNode);       // Marca como visitado

      for (const neighbor of currentNode.neighbors) {
        stack.push(neighbor); // Adiciona os vizinhos à pilha
      }
    }
  }
}

/**
 * Exemplo prático:
 *
 * Dado um grafo, encontre o caminho mais curto entre dois nós usando BFS.
 * Para resolver isso, podemos usar o algoritmo de BFS fornecido anteriormente.
 *
 * Começamos adicionando o nó inicial ao conjunto de visitados e à fila.
 * Enquanto a fila não estiver vazia, retiramos o nó atual, verificamos se ele é o destino.
 * Se for, retornamos o caminho. Caso contrário, adicionamos seus vizinhos não visitados à fila
 * e atualizamos o caminho.
 */

function shortestPaths(_graph: Graph, start: GraphNode, target: GraphNode): GraphNode[] | null {
  const visited: Set<GraphNode> = new Set(); // Conjunto de nós visitados
  const queue: [GraphNode, GraphNode[]][] = []; // Fila com tuplas (nó, caminho até aqui)

  queue.push([start, [start]]); // Inicia com o nó inicial e o caminho contendo ele

  while (queue.length > 0) {
    const [currentNode, currentPath] = queue.shift()!;

    if (currentNode === target) {
      return currentPath; // Caminho encontrado
    }

    visited.add(currentNode);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...currentPath, neighbor]]); // Adiciona o vizinho e atualiza caminho
      }
    }
  }

  return null; // Se não houver caminho
}

/**
 * Agora podemos usar todas essas funções para criar grafos, fazer buscas e encontrar caminhos.
 *
 * Exemplo de uso:
 */

// Criando um grafo
const graph = new Graph();
const a = graph.addNode('A');
const b = graph.addNode('B');
const c = graph.addNode('C');
const d = graph.addNode('D');
const e = graph.addNode('E');

// Conectando os nós
graph.addEdge(a, b);
graph.addEdge(a, c);
graph.addEdge(b, d);
graph.addEdge(c, e);

// Testando BFS e DFS
console.log("BFS:");
bfs(a);

console.log("\nDFS:");
dfs(a);

// Encontrando o caminho mais curto de A para E
console.log("\nCaminho mais curto de A para E:");
const path = shortestPath(graph, a, e);
console.log(path?.map(node => node.value).join(' -> '));
