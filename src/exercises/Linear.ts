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
