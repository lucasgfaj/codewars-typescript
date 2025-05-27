// Classe que representa uma palavra
class Word {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  // Método que verifica se a palavra difere em exatamente uma letra
  differsByOne(other: Word): boolean {
    if (this.value.length !== other.value.length) return false;

    let diffCount = 0;
    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] !== other.value[i]) {
        diffCount++;
        if (diffCount > 1) return false;
      }
    }
    return diffCount === 1;
  }
}

// Classe que representa o grafo de palavras
class Graph {
  adjacencyList: Map<string, Word[]> = new Map();

  constructor(private words: Word[]) {
    this.buildGraph();
  }

  // Constrói as conexões do grafo
  private buildGraph(): void {
    for (const word of this.words) {
      this.adjacencyList.set(word.value, []);
    }

    for (const word1 of this.words) {
      for (const word2 of this.words) {
        if (word1.differsByOne(word2)) {
          this.adjacencyList.get(word1.value)!.push(word2);
        }
      }
    }
  }

  // Retorna os vizinhos de uma palavra
  getNeighbors(word: Word): Word[] {
    return this.adjacencyList.get(word.value) || [];
  }
}

// Classe que resolve o problema
class WordLadderSolver {
  private graph: Graph;

  constructor(private words: Word[]) {
    this.graph = new Graph(words);
  }

  // Método que encontra o caminho usando BFS
  findPath(start: Word, end: Word): string[] | null {
    const queue: [Word, string[]][] = [];
    const visited = new Set<string>();

    queue.push([start, [start.value]]);
    visited.add(start.value);

    while (queue.length > 0) {
      const [current, path] = queue.shift()!;

      if (current.value === end.value) {
        return path;
      }

      for (const neighbor of this.graph.getNeighbors(current)) {
        if (!visited.has(neighbor.value)) {
          visited.add(neighbor.value);
          queue.push([neighbor, [...path, neighbor.value]]);
        }
      }
    }

    return null;
  }
}

// Forneça as palavras
const wordValues = ["BOLA", "BOLO", "COLO", "CALO", "TALO", "TATO", "RATO"];
const words = wordValues.map(value => new Word(value));

// Crie o resolvedor
const solver = new WordLadderSolver(words);

// Defina as palavras inicial e final
const start = new Word("BOLA");
const end = new Word("RATO");

// Encontre o caminho
const result = solver.findPath(start, end);

if (result) {
  console.log("Caminho encontrado:");
  console.log(result.join(" -> "));
} else {
  console.log("Nenhum caminho encontrado.");
}
