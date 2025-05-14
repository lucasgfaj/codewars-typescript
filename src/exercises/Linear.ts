/**
 * Estruturas de dados lineares com Array - Estilo direto
 * - Pilha (Stack)
 * - Fila (Queue)
 * - ListaLinear (List)
 */

// 📚 Pilha (LIFO - Last In, First Out)
export class Pilha {
  private arr: number[] = [];

  public push(valor: number): void {
    this.arr.push(valor);
  }

  public pop(): number | undefined {
    return this.arr.pop();
  }

  public topo(): number | undefined {
    return this.arr[this.arr.length - 1];
  }

  public estaVazia(): boolean {
    return this.arr.length === 0;
  }

  public listar(): number[] {
    return [...this.arr];
  }
}

// 🧾 Fila (FIFO - First In, First Out)
export class Fila {
  private arr: number[] = [];

  public enfileirar(valor: number): void {
    this.arr.push(valor);
  }

  public desenfileirar(): number | undefined {
    return this.arr.shift();
  }

  public frente(): number | undefined {
    return this.arr[0];
  }

  public estaVazia(): boolean {
    return this.arr.length === 0;
  }

  public listar(): number[] {
    return [...this.arr];
  }
}

// 🔢 Lista Linear com operações completas
export class ListaLinear {
  private arr: number[] = [];

  public inserirInicio(valor: number): void {
    this.arr.unshift(valor);
  }

  public inserirFinal(valor: number): void {
    this.arr.push(valor);
  }

  public inserirNaPosicao(pos: number, valor: number): void {
    if (pos < 0 || pos > this.arr.length) return;
    this.arr.splice(pos, 0, valor);
  }

  public removerInicio(): number | undefined {
    return this.arr.shift();
  }

  public removerFinal(): number | undefined {
    return this.arr.pop();
  }

  public removerDaPosicao(pos: number): number | undefined {
    if (pos < 0 || pos >= this.arr.length) return;
    const [removido] = this.arr.splice(pos, 1);
    return removido;
  }

  public consultarInicio(): number | undefined {
    return this.arr[0];
  }

  public consultarFinal(): number | undefined {
    return this.arr[this.arr.length - 1];
  }

  public consultarNaPosicao(pos: number): number | undefined {
    if (pos < 0 || pos >= this.arr.length) return;
    return this.arr[pos];
  }

  public listar(): number[] {
    return [...this.arr];
  }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
console.log("Pilha:", pilha.listar()); // [10, 20]

const fila = new Fila();
fila.enfileirar(1);
fila.enfileirar(2);
console.log("Fila:", fila.listar()); // [1, 2]

const lista = new ListaLinear();
lista.inserirFinal(100);
lista.inserirInicio(50);
lista.inserirNaPosicao(1, 75);

console.log("Lista:", lista.listar()); // [50, 75, 100]


// 🔗 Lista Encadeada Simples
class No {
  public valor: number;
  public proximo: No | null;

  constructor(valor: number) {
    this.valor = valor;
    this.proximo = null;
  }
}

export class ListaEncadeada {
  private cabeca: No | null = null;

  // Inserir no final da lista
  public inserir(valor: number): void {
    const novo = new No(valor);
    if (this.cabeca === null) {
      this.cabeca = novo;
    } else {
      let atual = this.cabeca;
      while (atual.proximo !== null) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }
  }

  // Remover valor (primeira ocorrência)
  public remover(valor: number): boolean {
    if (!this.cabeca) return false;

    if (this.cabeca.valor === valor) {
      this.cabeca = this.cabeca.proximo;
      return true;
    }

    let atual = this.cabeca;
    while (atual.proximo && atual.proximo.valor !== valor) {
      atual = atual.proximo;
    }

    if (atual.proximo) {
      atual.proximo = atual.proximo.proximo;
      return true;
    }

    return false;
  }

  // Listar todos os elementos
  public listar(): number[] {
    const elementos: number[] = [];
    let atual = this.cabeca;
    while (atual !== null) {
      elementos.push(atual.valor);
      atual = atual.proximo;
    }
    return elementos;
  }

  // Ver se está vazia
  public estaVazia(): boolean {
    return this.cabeca === null;
  }
}

const listaEncadeada = new ListaEncadeada();

listaEncadeada.inserir(10);
listaEncadeada.inserir(20);
listaEncadeada.inserir(30);

console.log("Lista Encadeada:", listaEncadeada.listar()); // [10, 20, 30]

listaEncadeada.remover(20);

console.log("Depois da remoção:", listaEncadeada.listar()); // [10, 30]