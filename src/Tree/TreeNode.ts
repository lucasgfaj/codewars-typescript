// Representa um nó da árvore
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Árvore binária de busca
export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // (1) Inserção
  insert(value: number): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else { // value >= current.value (para BSTs, valores duplicados geralmente vão para a direita)
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // (2) Listagem em ordem crescente (in-order traversal)
  inOrderTraversal(): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode | null): void {
      if (node !== null) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return result;
  }

  // (3) Retorno do menor elemento
  findMin(): number | null {
    if (this.root === null) return null;

    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  // (4) Retorno do maior elemento
  findMax(): number | null {
    if (this.root === null) return null;

    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  // (5) Função de Balanceamento (reconstrução a partir de uma lista ordenada)
  // Este método pega os elementos atuais da árvore, os ordena, e reconstrói a árvore
  // de forma a minimizar a altura, tornando-a mais balanceada.
  balance(): void {
    const sortedElements = this.inOrderTraversal(); // Obter todos os elementos ordenados
    this.root = this.buildBalancedTree(sortedElements, 0, sortedElements.length - 1);
  }

  // Método auxiliar recursivo para construir uma árvore balanceada a partir de um array ordenado
  private buildBalancedTree(arr: number[], start: number, end: number): TreeNode | null {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(arr[mid]);

    node.left = this.buildBalancedTree(arr, start, mid - 1);
    node.right = this.buildBalancedTree(arr, mid + 1, end);

    return node;
  }

  // (6) Inverter a Árvore (criar uma imagem espelhada)
  // Troca os filhos esquerdo e direito de cada nó recursivamente.
  invert(): void {
    this.root = this.invertTree(this.root);
  }

  private invertTree(node: TreeNode | null): TreeNode | null {
    if (node === null) {
      return null;
    }

    // Troca os filhos
    const left = this.invertTree(node.right); // Chama recursivamente para o 'novo' filho esquerdo (antigo direito)
    const right = this.invertTree(node.left); // Chama recursivamente para o 'novo' filho direito (antigo esquerdo)

    node.left = left;
    node.right = right;

    return node;
  }

  // (7) Busca em Largura (BFS) - Adequado para árvores não ordenadas ou para listar por nível
  // Retorna os valores dos nós em ordem de nível.
  bfs(): number[] {
    const result: number[] = [];
    const queue: TreeNode[] = [];

    if (this.root === null) {
      return result;
    }

    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift()!; // Pega o primeiro elemento da fila
      result.push(currentNode.value);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  // (8) Busca em Profundidade (DFS) - Tipos Pre-order, In-order, Post-order
  // Pre-order: processa o nó, depois esquerda, depois direita.
  preOrderTraversal(): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode | null): void {
      if (node !== null) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  // Post-order: processa esquerda, depois direita, depois o nó.
  postOrderTraversal(): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode | null): void {
      if (node !== null) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    }
    traverse(this.root);
    return result;
  }

}

// --- Exemplos de Uso ---

const bst = new BinarySearchTree();

console.log("--- Árvore Original ---");
// Inserção que pode criar uma árvore desbalanceada
// Por exemplo, inserir em ordem crescente criará uma lista ligada à direita
[50, 126, 28, 77, 12, 429, 39, 84, 256, 31].forEach(num => bst.insert(num));

console.log("Em ordem crescente (BST):", bst.inOrderTraversal()); // [12, 28, 31, 39, 50, 77, 84, 126, 256, 429]
console.log("Menor elemento:", bst.findMin());             // 12
console.log("Maior elemento:", bst.findMax());             // 429
console.log("Busca em Largura (BFS):", bst.bfs()); // Mostra os elementos por nível (útil para ver o balanceamento inicial)
console.log("Pré-ordem:", bst.preOrderTraversal());
console.log("Pós-ordem:", bst.postOrderTraversal());


console.log("\n--- Balanceando a Árvore ---");
bst.balance();
console.log("Em ordem crescente (após balanceamento):", bst.inOrderTraversal()); // Continua o mesmo, mas a estrutura interna mudou
console.log("Busca em Largura (BFS, após balanceamento):", bst.bfs()); // A ordem aqui pode mudar, refletindo o novo balanceamento
console.log("Pré-ordem (após balanceamento):", bst.preOrderTraversal()); // Muda drasticamente
console.log("Pós-ordem (após balanceamento):", bst.postOrderTraversal()); // Muda drasticamente


console.log("\n--- Invertendo a Árvore Balanceada ---");
bst.invert();
console.log("Em ordem (após inversão):", bst.inOrderTraversal()); // Estará em ordem decrescente
console.log("Busca em Largura (BFS, após inversão):", bst.bfs());
console.log("Pré-ordem (após inversão):", bst.preOrderTraversal());
console.log("Pós-ordem (após inversão):", bst.postOrderTraversal());

// --- Como procurar por uma árvore que não esteja ordenada? ---
// Para uma árvore que NÃO é uma BST (ou seja, os filhos não seguem a regra esquerda < pai < direita),
// a busca tradicional (find) não funciona. Você teria que usar um percurso completo.

// Exemplo de Árvore NÃO ORDENADA (uma árvore binária genérica)
class GenericTreeNode {
  value: number;
  left: GenericTreeNode | null;
  right: GenericTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class GenericBinaryTree {
  root: GenericTreeNode | null;

  constructor() {
    this.root = null;
  }

  // Exemplo de como construir uma árvore não ordenada (apenas para demonstração)
  // Em uma aplicação real, a inserção seria mais complexa ou carregada de outra fonte
  buildExampleUnorderedTree(): void {
    this.root = new GenericTreeNode(10);
    this.root.left = new GenericTreeNode(5);
    this.root.right = new GenericTreeNode(15);
    this.root.left!.left = new GenericTreeNode(20); // Valor maior à esquerda do 5
    this.root.left!.right = new GenericTreeNode(3); // Valor menor à direita do 5
    this.root.right!.left = new GenericTreeNode(12);
    this.root.right!.right = new GenericTreeNode(8); // Valor menor à direita do 15
  }

  // Função de busca para uma árvore genérica (não BST)
  // Você tem que visitar todos os nós até encontrar ou esgotar as opções.
  // Pode ser por BFS (Busca em Largura) ou DFS (Busca em Profundidade)
  findInUnorderedTree(value: number): GenericTreeNode | null {
    if (this.root === null) {
      return null;
    }

    // Usaremos BFS para este exemplo
    const queue: GenericTreeNode[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      if (currentNode.value === value) {
        return currentNode;
      }
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return null; // Valor não encontrado
  }
}

console.log("\n--- Busca em Árvore Não Ordenada ---");
const unorderedTree = new GenericBinaryTree();
unorderedTree.buildExampleUnorderedTree();

console.log("Procurando 20:", unorderedTree.findInUnorderedTree(20)?.value); // 20
console.log("Procurando 8:", unorderedTree.findInUnorderedTree(8)?.value);   // 8
console.log("Procurando 99:", unorderedTree.findInUnorderedTree(99));     // null