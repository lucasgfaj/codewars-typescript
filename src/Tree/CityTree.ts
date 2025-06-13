interface Cidade {
  nome: string;
  estado: string;
}

interface NodeInterface<T> {
  value: T;
  left: NodeInterface<T> | null;
  right: NodeInterface<T> | null;
}

interface TreeBinaryInterface<T> {
  root: NodeInterface<T> | null;

  insert(value: T): void;
  find(value: T): NodeInterface<T> | null;
  remove(value: T): void;
  printTree(
    node?: NodeInterface<T> | null,
    prefix?: string,
    isLeft?: boolean
  ): void;
  balance(): void;
  preorderTraversal(root?: NodeInterface<T> | null): T[];
  inorderTraversal(root?: NodeInterface<T> | null): T[];
  postorderTraversal(root?: NodeInterface<T> | null): T[];
  height(node?: NodeInterface<T> | null): number;
  longestPath(node?: NodeInterface<T> | null): T[];
  dfs(value: T, root?: NodeInterface<T> | null): boolean;
  bfs(value: T): boolean;
}

class No<T> implements NodeInterface<T> {
  public constructor(
    public value: T,
    public left: NodeInterface<T> | null = null,
    public right: NodeInterface<T> | null = null
  ) {}
}

export class TreeBinaryCidade implements TreeBinaryInterface<Cidade> {
  public root: NodeInterface<Cidade> | null = null;

  private getKey(value: Cidade): string {
    return `${value.nome.toLowerCase()}-${value.estado.toLowerCase()}`;
  }

  public insert(value: Cidade): void {
    if (!this.root) {
      this.root = new No(value);
    } else {
      this.recursiveInsert(value, this.root);
    }
  }

  private recursiveInsert(value: Cidade, node: NodeInterface<Cidade>): void {
    const nodeKey = this.getKey(node.value);
    const valueKey = this.getKey(value);

    if (valueKey === nodeKey) {
      console.log(`Cidade '${value.nome}' do estado '${value.estado}' já existe.`);
      return;
    }

    if (valueKey < nodeKey) {
      if (node.left) {
        this.recursiveInsert(value, node.left);
      } else {
        node.left = new No(value);
      }
    } else {
      if (node.right) {
        this.recursiveInsert(value, node.right);
      } else {
        node.right = new No(value);
      }
    }
  }

  public find(value: Cidade): NodeInterface<Cidade> | null {
    return this.recursiveFind(value, this.root);
  }

  private recursiveFind(value: Cidade, node: NodeInterface<Cidade> | null): NodeInterface<Cidade> | null {
    if (!node) return null;

    const nodeKey = this.getKey(node.value);
    const valueKey = this.getKey(value);

    if (valueKey === nodeKey) return node;

    if (valueKey < nodeKey) return this.recursiveFind(value, node.left);

    return this.recursiveFind(value, node.right);
  }

  public remove(value: Cidade): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(
    node: NodeInterface<Cidade> | null,
    value: Cidade
  ): NodeInterface<Cidade> | null {
    if (!node) return null;

    const nodeKey = this.getKey(node.value);
    const valueKey = this.getKey(value);

    if (valueKey < nodeKey) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (valueKey > nodeKey) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      const minLargerNode = this.findMinNode(node.right);
      node.value = minLargerNode!.value;
      node.right = this.removeNode(node.right, minLargerNode!.value);
      return node;
    }
  }

  private findMinNode(node: NodeInterface<Cidade>): NodeInterface<Cidade> {
    while (node.left != null) {
      node = node.left;
    }
    return node;
  }

  public preorderTraversal(root: NodeInterface<Cidade> | null = this.root): Cidade[] {
    if (!root) return [];
    return [
      root.value,
      ...this.preorderTraversal(root.left),
      ...this.preorderTraversal(root.right),
    ];
  }

  public inorderTraversal(root: NodeInterface<Cidade> | null = this.root): Cidade[] {
    if (!root) return [];
    return [
      ...this.inorderTraversal(root.left),
      root.value,
      ...this.inorderTraversal(root.right),
    ];
  }

  public postorderTraversal(root: NodeInterface<Cidade> | null = this.root): Cidade[] {
    if (!root) return [];
    return [
      ...this.postorderTraversal(root.left),
      ...this.postorderTraversal(root.right),
      root.value,
    ];
  }

  public dfs(value: Cidade, root: NodeInterface<Cidade> | null = this.root): boolean {
    if (!root) return false;
    if (this.getKey(root.value) === this.getKey(value)) return true;
    return this.dfs(value, root.left) || this.dfs(value, root.right);
  }

  public bfs(value: Cidade): boolean {
    if (!this.root) return false;
    const deque = [this.root];
    const targetKey = this.getKey(value);

    while (deque.length > 0) {
      const node = deque.shift();
      if (node && this.getKey(node.value) === targetKey) return true;
      if (node?.left) deque.push(node.left);
      if (node?.right) deque.push(node.right);
    }

    return false;
  }

  public height(node: NodeInterface<Cidade> | null = this.root): number {
    if (!node) return 0;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  public longestPath(node: NodeInterface<Cidade> | null = this.root): Cidade[] {
    if (!node) return [];

    const leftPath = this.longestPath(node.left);
    const rightPath = this.longestPath(node.right);

    return leftPath.length > rightPath.length
      ? [node.value, ...leftPath]
      : [node.value, ...rightPath];
  }

  public balance(): void {
    const sortedNodes = this.inorderTraversal();
    this.root = this.sortedArrayToBST(sortedNodes);
  }

  private sortedArrayToBST(arr: Cidade[]): NodeInterface<Cidade> | null {
    if (arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const root = new No(arr[mid]);

    root.left = this.sortedArrayToBST(arr.slice(0, mid));
    root.right = this.sortedArrayToBST(arr.slice(mid + 1));

    return root;
  }

  public printTree(
    node: NodeInterface<Cidade> | null = this.root,
    prefix: string = "",
    isLeft: boolean = true
  ): void {
    if (!node) return;

    console.log(
      prefix + (isLeft ? "└── " : "├── ") + `${node.value.nome} - ${node.value.estado}`
    );

    if (node.left || node.right) {
      if (node.left) {
        this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
      } else {
        console.log(prefix + (isLeft ? "    " : "│   ") + "└── " + "null");
      }

      if (node.right) {
        this.printTree(node.right, prefix + (isLeft ? "    " : "│   "), false);
      } else {
        console.log(prefix + (isLeft ? "    " : "│   ") + "└── " + "null");
      }
    }
  }
}

const arvore = new TreeBinaryCidade();

arvore.insert({ nome: "Curitiba", estado: "PR" });
arvore.insert({ nome: "São Paulo", estado: "SP" });
arvore.insert({ nome: "Florianópolis", estado: "SC" });
arvore.insert({ nome: "Curitiba", estado: "PR" }); // Repetido - será ignorado
arvore.insert({ nome: "Curitiba", estado: "RS" }); // OK, outro estado

arvore.printTree();
