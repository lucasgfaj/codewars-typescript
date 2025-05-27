class Nodes {
  value: any;
  neighbors: Nodes[];

  constructor(value: any) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(nodes: Nodes) {
    this.neighbors.push(nodes);
  }
}

class Graphz {
  nodes: Nodes[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: any) {
    const nodes = new Nodes(value);
    this.nodes.push(nodes);
  }

  addEdge(source: Nodes, destination: Nodes) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}

function bfs(startNode: Nodes) {
  const visited: Set<Nodes> = new Set();
  const queue: Nodes[] = [];

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    console.log(currentNode.value);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

function dfs(startNode: Nodes) {
  const visited: Set<Nodes> = new Set();
  const stack: Nodes[] = [];

  stack.push(startNode);

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    if (!visited.has(currentNode)) {
      console.log(currentNode.value);
      visited.add(currentNode);

      for (const neighbor of currentNode.neighbors) {
        stack.push(neighbor);
      }
    }
  }
}

function shortestPath(graph: Graphz, start: Nodes, target: Nodes) {
  const visited: Set<Nodes> = new Set();
  const queue: [Nodes, Nodes[]][] = [];

  queue.push([start, [start]]);

  while (queue.length > 0) {
    const [currentNode, currentPath] = queue.shift()!;

    if (currentNode === target) {
      return currentPath;
    }

    visited.add(currentNode);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...currentPath, neighbor]]);
      }
    }
  }
  return null;
}

// Criando o grafo
const graphz = new Graphz();

graphz.addNode("A");
graphz.addNode("B");
graphz.addNode("C");
graphz.addNode("D");
graphz.addNode("E");

// Criando variáveis de referência para os nós
const nodeA = graphz.nodes[0];
const nodeB = graphz.nodes[1];
const nodeC = graphz.nodes[2];
const nodeD = graphz.nodes[3];
const nodeE = graphz.nodes[4];

// Criando as arestas
graphz.addEdge(nodeA, nodeB);
graphz.addEdge(nodeA, nodeC);
graphz.addEdge(nodeB, nodeD);
graphz.addEdge(nodeC, nodeD);
graphz.addEdge(nodeD, nodeE);

console.log("=== BFS ===");
bfs(nodeA);  // Esperado: A, B, C, D, E (ordem pode variar)

console.log("\n=== DFS ===");
dfs(nodeA);  // Esperado: A, C, D, E, B ou outra ordem válida

console.log("\n=== Shortest Path de A para E ===");
const shortestPathResult = shortestPath(graphz, nodeA, nodeE);

if (shortestPathResult) {
  console.log("Menor caminho encontrado:");
  console.log(shortestPathResult.map(node => node.value).join(" -> "));  
  // Esperado: A -> B -> D -> E ou A -> C -> D -> E
} else {
  console.log("Caminho não encontrado.");
}
