class No<T> {
    value: T;
    next: No<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export class StackTree<T> {
    private top: No<T> | null = null;
    private size: number = 0;

    // Adiciona um novo elemento ao topo da pilha

    push(value: T): void {
        const newNode = new No(value);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Remove e retorna o elemento do topo da pilha

    pop(): T | null {
        if (this.top === null) {
            return null;
        }
        const poppedNo = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNo.value;
    }

    // Retorna o valor do topo sem removê-lo

    peek(): T | null {
        return this.top ? this.top.value : null;
    }

    // Verifica se a pilha está vazia

    isEmpty(): boolean {
        return this.size === 0;
    }

    // Retorna o tamanho da pilha

    getSize(): number {
        return this.size;
    }

    // Imprime os elementos da pilha
    print(): void {
        let current = this.top;
        const elements: T[] = [];
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log("Topo ->", elements.join(" -> "));
    }
}


const stack = new StackTree<number>();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Topo -> 30 -> 20 -> 10

console.log("Topo da pilha:", stack.peek()); // 30

console.log("Removido:", stack.pop()); // 30

stack.print(); // Topo -> 20 -> 10