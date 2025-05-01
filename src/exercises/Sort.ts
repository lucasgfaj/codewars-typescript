export class SortThree {
  private a;
  private b;
  private c;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  //getters e setters

  public sortThree(): number[] {
    if (this.a > this.b && this.c > this.b) {
      return [this.b, this.c, this.a];
    }

    if (this.b > this.a && this.a > this.c) {
      return [this.c, this.a, this.b];
    }

    if (this.c > this.b && this.b > this.a) {
      return [this.a, this.b, this.c];
    }

    return [this.c, this.b, this.a];
  }

  public sortThreeMax(): number[] {
    let x: number = this.a;
    let y: number = this.b;
    let z: number = this.c;

    if (x > y) [x, y] = [y, x];
    if (y > z) [y, z] = [z, y];
    if (y > x) [y, x] = [x, y];

    return [x, y, z];
  }

  public biggerThree(): number {
    if (this.a > this.b && this.a > this.c) return this.c;

    if (this.b > this.a && this.b > this.c) return this.b;

    return this.c;
  }
}

export class SortCheap {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  public getArr(): number[] {
    return this.arr;
  }

  public setArr(arr: number[]): void {
    this.arr = arr;
  }
  // Explicação do SelecionSort: https://www.youtube.com/watch?v=pDY2rGdsYAE&t=13s
  public selectionSortImproved(): string {
    let sortArr: number[] = this.arr;
    let compare: number = 0;
    let swap: number = 0;

    for (let i = 0; i < sortArr.length - 1; i++) {
      let pos = i;
      for (let j = i + 1; j < sortArr.length; j++) {
        compare++;
        if (sortArr[pos] > sortArr[j]) {
          pos = j;
        }
      }
      if (pos != i) {
        swap++;
        [sortArr[i], sortArr[pos]] = [sortArr[pos], sortArr[i]];
      }
    }

    return `${sortArr} compare: ${compare}, swap: ${swap}`;
  }

  // Explicação do InsertionSort:
  public insertionSort(): string {
    let sortArr: number[] = this.arr;
    let compare: number = 0;
    let swap: number = 0;

    for (let i = 1; i < sortArr.length; i++) {
      let key = sortArr[i]; // digamos que é pos 1 é 1
      let j = i - 1; // digamos que a pos 0 é 3

      while (j >= 0) {
        // verifica que é maior ou igual a 0
        compare++;
        if (sortArr[j] > key) {
          // se 3 é maior que 1 então
          sortArr[j + 1] = sortArr[j]; // posicao 1 irá receber o 3
          swap++;
          j--; // diminui um no contador então será -1
        } else {
          break;
        }
      }
      sortArr[j + 1] = key; // insere o valor da key na posição correta
      // como j foi decrementado ele é -1 porém com o j + 1 será 0
      swap++;
    }
    return `${sortArr}, Compare: ${compare}, Swap: ${swap}`;
  }

  public bubbleSortExample(): string {
    // Pega o array da classe para ordenar
    let sortArr: number[] = this.arr;

    // Contadores para saber quantas comparações e trocas foram feitas
    let compare: number = 0;
    let swap: number = 0;

    // Loop externo: controla o número de "passadas" no array
    for (let i = 0; i < sortArr.length - 1; i++) {
      // Vamos ver posição por posição:

      // i	arr[i]	arr[i + 1]	Comparação possível?
      // 0	arr[0] = 4	arr[1] = 3	sim
      // 1	arr[1] = 3	arr[2] = 2	sim
      // 2	arr[2] = 2	arr[3] = 1	sim
      // 3	arr[3] = 1	arr[4] = ❌	não existe!

      let swapped = false; // Flag para saber se houve troca nessa passada

      // Loop interno: faz as comparações e trocas entre pares vizinhos
      for (let j = 0; j < sortArr.length - i - 1; j++) {
        compare++; // Conta mais uma comparação

        // Agora vamos mostrar a posição final de cada volta (i):

        // i = 0: j vai até n - 1 - 0 = 3 → j = 0, 1, 2

        // i = 1: j vai até n - 1 - 1 = 2 → j = 0, 1

        // i = 2: j vai até n - 1 - 2 = 1 → j = 0

        // i = 3: j vai até n - 1 - 3 = 0 → não entra no loop

        // Se o elemento atual é maior que o próximo, troca]

        if (sortArr[j] > sortArr[j + 1]) {
          // TROCA os dois elementos de lugar
          [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
          swapped = true; // Marca que houve troca
          swap++; // Conta a troca
        }
      }

      // Se nenhuma troca foi feita, o array já está ordenado → para o loop
      if (swapped == false) {
        break;
      }
    }

    // Retorna o array ordenado em string + quantas comparações e trocas foram feitas
    return `${sortArr}, Compare: ${compare}, Swap: ${swap}`;
  }

  public bubbleSort(): string {
    let sortArr: number[] = this.arr;
    let compare: number = 0;
    let swap: number = 0;

    for (let i = 0; i < sortArr.length - 1; i++) {
      for (let j = 0; j < sortArr.length - i - 1; j++) {
        compare++;
        if (sortArr[j] > sortArr[j + 1]) {
          [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
          swap++;
        }
      }
    }
    return `${sortArr}, Compare: ${compare}, Swap: ${swap}`;
  }

  public bubbleSortImprovise(): string {
    let sortArr: number[] = this.arr;
    let compare: number = 0;
    let swap: number = 0;

    for (let i = 0; i < sortArr.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < sortArr.length - i - 1; j++) {
        compare++;
        if (sortArr[j] > sortArr[j + 1]) {
          [sortArr[j], sortArr[j + 1]] = [sortArr[j + 1], sortArr[j]];
          swapped = true;
          swap++;
        }
      }
      if (swapped == false) {
        break;
      }
    }
    return `${sortArr}, Compare: ${compare}, Swap: ${swap}`;
  }
}
export class UnidimensionalArray {
  readonly TAM = 20;
  private arr: number[];

  public constructor(arr: number[]) {
    this.arr = arr;
  }

  public isGrowing(): boolean {
    for (let i = 0; i < this.arr.length - 1; i++) {
      if (this.arr[i] > this.arr[i + 1]) return false;
    }
    return true;
  }

  public shuffle(): number[] {
    let shuffleArr: number[] = this.arr;

    for (let i = 0; i < shuffleArr.length; i++) {
      let randomIndex = Math.floor(Math.random() * shuffleArr.length);

      let temp = shuffleArr[i];
      shuffleArr[i] = shuffleArr[randomIndex];
      shuffleArr[randomIndex] = temp;
    }
    return shuffleArr;
  }

  // Explicação: https://www.youtube.com/watch?v=9cIjvXEeOhQ

  // Gnomo ve se o 0 1 3 2
  // ai ele andar e verifica se o 1 é maior que 0 se sim, ele anda para frente
  // ai chega no caso ele verifica se 2 é maior que ze
  public gnomeSort(): number[] {
    let sortArr: number[] = [...this.arr]; // faz copia do array
    let i = 0;

    while (i < sortArr.length) {
      if (i === 0 || sortArr[i] >= sortArr[i - 1]) {
        i++;
      } else {
        [sortArr[i], sortArr[i - 1]] = [sortArr[i - 1], sortArr[i]];
        i--;
      }
    }
    return sortArr;
  }

  public selectSortRecursive(): number[] {
    return this.selectionSortRecursiveAux(this.arr);
  }

  private selectionSortRecursiveAux(
    arr: number[],
    i: number = 0,
    j: number = i + 1,
    minIndex: number = i
  ): number[] {
    if (i >= arr.length - 1) return arr; // Caso base: array ordenado

    if (j < arr.length) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      return this.selectionSortRecursiveAux(arr, i, j + 1, minIndex); // continua procurando o menor
    } else {
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
      return this.selectionSortRecursiveAux(arr, i + 1); // passa para a próxima posição
    }
  }

  public extremeNext(n: number): number {
    // Garante que o array está ordenado em ordem crescente
    const arr = [...this.arr].sort((a, b) => a - b);
    let pos = -1;

    // Verificação de faixa válida (x deve estar entre o menor e o maior elemento)
    if (n < arr[0] || n > arr[arr.length - 1]) return -1;

    // Decide a extremidade mais próxima
    const fromStart = Math.abs(n - arr[0]);
    const fromEnd = Math.abs(n - arr[arr.length - 1]);

    if (fromStart <= fromEnd) {
      // Busca sequencial do início
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) break; // já passou do número, pode parar
        if (arr[i] === n) {
          pos = i;
          break;
        }
      }
    } else {
      // Busca sequencial do final
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < n) break; // já passou do número ao voltar
        if (arr[i] === n) {
          pos = i;
          break;
        }
      }
    }

    return pos;
  }
}


export class megaSena {
    private arr: number[];
  
    public constructor(arr: number[]) {
      if (arr.length < 6 || arr.length > 20) {
        throw new Error("Aposta deve conter entre 6 e 20 números.");
      }
      this.arr = arr;
    }
  
    public getArr(): number[] {
      return this.arr;
    }
  
    public setArr(arr: number[]): void {
      if (arr.length < 6 || arr.length > 20) {
        throw new Error("Aposta deve conter entre 6 e 20 números.");
      }
      this.arr = arr;
    }
  
    private megaSena(sena: number[]): number {
      let hits = 0;
  
      for (let i = 0; i < sena.length; i++) {
        if (sena[i] === this.arr[i]) {
          hits++;
        }
      }
      return hits;
    }
  
    public megaSenaSort(sena: number[]): string {
      const hits = this.megaSena(sena);
  
      switch (hits) {
        case 6:
          return `sena`;
        case 5:
          return "quina";
        case 4:
          return "quadra";
        default:
          return "não premiado";
      }
    }
  }
  
export class Bingo {
  readonly TAM: number = 25;
  private arr: number[] = [];

  public constructor(arr: number[]) {
    this.generateNumbers();
  }

  private generateNumbers(): void {
    const numbers: Set<number> = new Set();

    while (numbers.size < this.TAM) {
      let num = Math.floor(Math.random() * 50) + 1;
      numbers.add(num);
    }

    this.arr = Array.from(numbers);
  }

  private generateBingo(): number[][] {
    let bingo = this.arr;
    let columns = 5;
    let arr: number[][] = [];

    for (let i = 0; i < this.TAM; i++) {
      let lineIndex = Math.floor(i / columns);

      if (!arr[lineIndex]) {
        arr[lineIndex] = [];
      }

      arr[lineIndex].push(bingo[i]);
    }
    return arr;
  }

  public toString(): string {
    let returnBingo: string = "";
    let bingoString: string[] = ["B", "I", "N", "G", "O"];
    let bingo = this.generateBingo();

    returnBingo += bingoString.join("  ") + "\n";

    for (let i = 0; i < bingo.length; i++) {
      for (let j = 0; j < bingo[i].length; j++) {
        returnBingo += bingo[i][j].toString().padStart(2, " ") + " ";
      }
      returnBingo += "\n";
    }

    return returnBingo;
  }
}
