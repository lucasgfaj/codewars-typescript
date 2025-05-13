export default class ListaLinear<T> {
  private arr: T[] = [];

  // (1) Inserir no início
  inserirNoInicio(valor: T): void {
    this.arr.unshift(valor);
  }

  // (1) Remover do início
  removerDoInicio(): T | undefined {
    return this.arr.shift();
  }

  // (2) Inserir no final
  inserirNoFinal(valor: T): void {
    this.arr.push(valor);
  }

  // (2) Remover do final
  removerDoFinal(): T | undefined {
    return this.arr.pop();
  }

  // (3) Inserir em qualquer posição
  inserirNaPosicao(posicao: number, valor: T): void {
    if (posicao < 0 || posicao > this.arr.length) {
      throw new Error("Posição inválida.");
    }
    this.arr.splice(posicao, 0, valor);
  }

  // (3) Remover de qualquer posição
  removerDaPosicao(posicao: number): T | undefined {
    if (posicao < 0 || posicao >= this.arr.length) {
      throw new Error("Posição inválida.");
    }
    const [removido] = this.arr.splice(posicao, 1);
    return removido;
  }

  // (4) Consultar o início
  consultarInicio(): T | undefined {
    return this.arr[0];
  }

  // (4) Consultar o final
  consultarFinal(): T | undefined {
    return this.arr[this.arr.length - 1];
  }

  // (4) Consultar posição arbitrária
  consultarNaPosicao(posicao: number): T | undefined {
    if (posicao < 0 || posicao >= this.arr.length) {
      throw new Error("Posição inválida.");
    }
    return this.arr[posicao];
  }

  // Extra: mostrar todos os elementos
  listar(): T[] {
    return [...this.arr];
  }
}

export class EstruturaLinear {
  private arr: number[] = [];

  public constructor() {}

  // (1) Inserir no início
  public inserirInicio(valor: number): void {
    this.arr.unshift(valor);
  }

  // (1) Remover do início
  public removerInicio(): number | undefined {
    return this.arr.shift();
  }

  // (2) Inserir no final
  public inserirFinal(valor: number): void {
    this.arr.push(valor);
  }

  // (2) Remover do final
  public removerFinal(): number | undefined {
    return this.arr.pop();
  }

  // (3) Inserir em uma posição específica
  public inserirNaPosicao(pos: number, valor: number): void {
    if (pos < 0 || pos > this.arr.length) return;
    this.arr.splice(pos, 0, valor);
  }

  // (3) Remover de uma posição específica
  public removerDaPosicao(pos: number): number | undefined {
    if (pos < 0 || pos >= this.arr.length) return;
    const [removido] = this.arr.splice(pos, 1);
    return removido;
  }

  // (4) Consultar início
  public consultarInicio(): number | undefined {
    return this.arr[0];
  }

  // (4) Consultar final
  public consultarFinal(): number | undefined {
    return this.arr[this.arr.length - 1];
  }

  // (4) Consultar posição específica
  public consultarNaPosicao(pos: number): number | undefined {
    if (pos < 0 || pos >= this.arr.length) return;
    return this.arr[pos];
  }

  // Mostrar tudo
  public listar(): number[] {
    return [...this.arr];
  }
}
