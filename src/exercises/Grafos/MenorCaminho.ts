// Classe para representar um Grafo
class Graphs {
    adjacencyList: Map<string, { node: string, weight: number }[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: string) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(v1: string, v2: string, weight: number = 1) {
        this.adjacencyList.get(v1)?.push({ node: v2, weight });
        this.adjacencyList.get(v2)?.push({ node: v1, weight }); // Se for grafo direcionado, remova essa linha
    }

    // Algoritmo de Dijkstra
    dijkstra(start: string) {
        const distances: { [key: string]: number } = {};
        const visited = new Set<string>();
        const previous: { [key: string]: string | null } = {};

        // Inicializa todas as distâncias como infinito
        for (let vertex of this.adjacencyList.keys()) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
        }
        distances[start] = 0;

        while (visited.size !== this.adjacencyList.size) {
            // Escolhe o nó não visitado com a menor distância
            let current: string | null = null;
            let minDistance = Infinity;

            for (let vertex of this.adjacencyList.keys()) {
                if (!visited.has(vertex) && distances[vertex] < minDistance) {
                    minDistance = distances[vertex];
                    current = vertex;
                }
            }

            if (current === null) break;

            visited.add(current);

            for (let neighbor of this.adjacencyList.get(current) || []) {
                let alt = distances[current] + neighbor.weight;
                if (alt < distances[neighbor.node]) {
                    distances[neighbor.node] = alt;
                    previous[neighbor.node] = current;
                }
            }
        }

        return { distances, previous };
    }

    // Busca em Largura - BFS
    bfs(start: string) {
        const visited = new Set<string>();
        const queue: string[] = [start];
        const result: string[] = [];

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);

                for (let neighbor of this.adjacencyList.get(vertex) || []) {
                    if (!visited.has(neighbor.node)) {
                        queue.push(neighbor.node);
                    }
                }
            }
        }
        return result;
    }

    // Busca em Profundidade - DFS
    dfs(start: string) {
        const visited = new Set<string>();
        const result: string[] = [];

        const dfsHelper = (vertex: string) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);

            for (let neighbor of this.adjacencyList.get(vertex) || []) {
                if (!visited.has(neighbor.node)) {
                    dfsHelper(neighbor.node);
                }
            }
        }

        dfsHelper(start);
        return result;
    }
}

// --- Testando o Grafo --- //
const graphs = new Graphs();

// Adiciona vértices
graphs.addVertex("A");
graphs.addVertex("B");
graphs.addVertex("C");
graphs.addVertex("D");
graphs.addVertex("E");

// Adiciona arestas
graphs.addEdge("A", "B", 2);
graphs.addEdge("A", "C", 4);
graphs.addEdge("B", "C", 1);
graphs.addEdge("B", "D", 7);
graphs.addEdge("C", "E", 3);
graphs.addEdge("D", "E", 1);

console.log("BFS:", graphs.bfs("A"));  // Exemplo: [ 'A', 'B', 'C', 'D', 'E' ]
console.log("DFS:", graphs.dfs("A"));  // Exemplo: [ 'A', 'B', 'C', 'E', 'D' ]
console.log("Dijkstra:", graphs.dijkstra("A")); 
