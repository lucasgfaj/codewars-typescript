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
      } else {
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
}


const bst = new BinarySearchTree();

[50, 126, 28, 77, 12, 429, 39, 84, 256, 31].forEach(num => bst.insert(num));

console.log("Em ordem crescente:", bst.inOrderTraversal()); // [12, 28, 31, 39, 50, 77, 84, 126, 256, 429]
console.log("Menor elemento:", bst.findMin());             // 12
console.log("Maior elemento:", bst.findMax());             // 429
