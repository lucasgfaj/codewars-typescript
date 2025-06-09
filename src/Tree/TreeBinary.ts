interface NodeInterface<T> {
  value: T;
  left: NodeInterface<T> | null;
  right: NodeInterface<T> | null;
}

interface TreeBinaryInterface<T> {
  root: NodeInterface<T> | null;

  insert(value: T): void;
  find(value: T): NodeInterface<T> | null;
 // preorderTraversal(root?: NodeInterface<T> | null): T[];
 // inorderTraversal(root?: NodeInterface<T> | null): T[];
 // postorderTraversal(root?: NodeInterface<T> | null): T[];
}

class No<T> implements NodeInterface<T> {
  public constructor(
    public value: T,
    public left: NodeInterface<T> | null = null,
    public right: NodeInterface<T> | null = null
  ) {}
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
    if(value < node.value){
        if(node.left) {
            this.recursiveInsert(value, node.left);
        } else {
            node.left = new No(value);
        }
    } else {
        if(node.right){
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

}
