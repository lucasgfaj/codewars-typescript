interface NodeInterface<T> {
  value: T;
  left: NodeInterface<T> | null;
  right: NodeInterface<T> | null;
}

interface TreeBinaryInterface<T> {
  root: NodeInterface<T> | null;

  insert(value: T): void;
  find(value: T): NodeInterface<T> | null;
  printTree(node?: NodeInterface<T> | null, prefix?: string, isLeft?: boolean): void;  // Adicionando o método de impressão
  preorderTraversal(root?: NodeInterface<T> | null): T[];
  inorderTraversal(root?: NodeInterface<T> | null): T[];
  postorderTraversal(root?: NodeInterface<T> | null): T[];
  dfs(value: T, root?: NodeInterface<T> | null): boolean;
	bfs(value: T): boolean;
}

class No<T> implements NodeInterface<T> {
  public constructor(
    public value: T,
    public left: NodeInterface<T> | null = null,
    public right: NodeInterface<T> | null = null
  ) { }
}

export class TreeBinary<T> implements TreeBinaryInterface<T> {
  public root: NodeInterface<T> | null = null;

  public insert(value: T): void {
    if (!this.root) {
      this.root = new No(value);
    } else {
      this.recursiveInsert(value, this.root);
    }
  }

  private recursiveInsert(value: T, node: No<T>): void {
    if (value < node.value) {
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

  public find(value: T): NodeInterface<T> | null {
    return this.recursiveFind(value, this.root);
  }

  private recursiveFind(value: T, node: No<T> | null): No<T> | null {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      return node;
    }

    if (value < node.value) {
      return this.recursiveFind(value, node.left);
    }

    return this.recursiveFind(value, node.right);
  }

  public preorderTraversal(root: NodeInterface<T> | null = this.root): T[] {
    if (!root) {
      return [];
    }

    return [
      root.value,
      ...this.preorderTraversal(root.left),
      ...this.preorderTraversal(root.right),
    ];
  }

  public inorderTraversal(root: NodeInterface<T> | null = this.root): T[] {
		if (!root) {
			return [];
		}

		return [
			...this.inorderTraversal(root.left),
			root.value,
			...this.inorderTraversal(root.right),
		];
	}


	public postorderTraversal(root: NodeInterface<T> | null = this.root): T[] {
		if (!root) {
			return [];
		}

		return [
			...this.postorderTraversal(root.left),
			...this.postorderTraversal(root.right),
			root.value,
		];
	}

  public dfs(value: T, root: NodeInterface<T> | null = this.root): boolean {
		if (!root) return false;
		if (root.value === value) return true;
		return this.dfs(value, root.left) || this.dfs(value, root.right);
	}

	public bfs(value: T): boolean {
		if (!this.root) return false;
		const deque = [];
		deque.push(this.root);
		while (deque.length > 0) {
			const node = deque.shift();
			if (node?.value === value) return true;
			if (node?.left) deque.push(node.left);
			if (node?.right) deque.push(node.right);
		}
    return false
	}

  public printTree(
    node: NodeInterface<T> | null = this.root,
    prefix: string = "",
    isLeft: boolean = true
  ): void {
    if (node === null) return;

    console.log(prefix + (isLeft ? "└── " : "├── ") + node.value);

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
