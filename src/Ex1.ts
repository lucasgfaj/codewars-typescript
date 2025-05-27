class Node {
  value: any;
  neighbors: Node[];

  constructor(value: any) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node: Node) {
    this.neighbors.push(node);
  }
}

class Graph {
  nodes: Node[];

  constructor() {
    this.nodes = [];
  }

  addNode(value: any) {
    const node = new Node(value);
    this.nodes.push(node);
  }

  addEdge(source: Node, destination: Node) {
    source.addNeighbor(destination);
    destination.addNeighbor(source);
  }
}

function bfs(startNode: Node) {
  const visited: Set<Node> = new Set();
  const queue: Node[] = [];

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

function dfs(startNode: Node) {
  const visited: Set<Node> = new Set();
  const stack: Node[] = [];

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

function shortestPath(graph: Graph, start: Node, target: Node) {
  const visited: Set<Node> = new Set();
  const queue: [Node, Node[]][] = [];

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
