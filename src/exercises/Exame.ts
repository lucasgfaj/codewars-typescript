export class Exame {
    private arr: number[];

    public constructor(arr: number[]) {
        this.arr = arr;
    }

    public getArr(): number[] {
        return this.arr;
    }

    public setArr(arr: number[]) {
        this.arr = arr;
    }

    /**
     * Algoritmo de ordenação Selection Sort
     * Percorre o array, encontra o menor elemento à frente e troca com o elemento da posição atual.
     */
    public selectionSort(): number[] {
        const arr = [...this.arr];

        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            // troca o menor valor encontrado com o da posição atual
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
        return arr;
    }

    /**
     * Algoritmo de ordenação Insertion Sort
     * Insere cada elemento na posição correta em relação aos elementos anteriores.
     */
    public insertionSort(): number[] {
        const arr = [...this.arr];

        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;

            // move os elementos maiores que o atual para frente
            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j];
                j--;
            }

            // insere o elemento atual na posição correta
            arr[j + 1] = current;
        }
        return arr;
    }

    /**
     * Algoritmo de ordenação Bubble Sort
     * Compara elementos adjacentes e os troca de lugar se estiverem fora de ordem.
     * Repete até que nenhuma troca seja mais necessária.
     */
    public bubbleSort(): number[] {
        const arr = [...this.arr];
        let swapped: boolean;

        do {
            swapped = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] > arr[i + 1]) {
                    // troca os elementos se estiverem fora de ordem
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swapped = true;
                }
            }
        } while (swapped);

        return arr;
    }

    /**
     * Busca Sequencial
     * Percorre o array do início ao fim procurando o valor alvo.
     * Retorna o índice do elemento se encontrado ou -1 se não estiver presente.
     */
    public sequencySearch(target: number): number {
        const arr = [...this.arr];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === target) return i;
        }
        return -1;
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

    /**
     * Busca Binária
     * Requer array ordenado.
     * Divide o array ao meio iterativamente até encontrar o elemento desejado ou concluir que ele não existe.
     */
    public binarySearch(target: number): number {
        const arr = this.arr.sort((a, b) => a - b); // ordena o array para a busca binária

        let init = 0;
        let end = arr.length - 1;

        while (init <= end) {
            const mid = Math.floor((init + end) / 2);

            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                init = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1; // elemento não encontrado
    }

    public findUniqWithWhile(arr: number[]): number {
        arr.sort((a, b) => a - b); // necessário para usar busca binária
      
        let low = 0;
        let high = arr.length - 1;
      
        while (low < high) {
          let mid = Math.floor((low + high) / 2);
      
          // se mid é igual ao da esquerda, o diferente está à direita
          if (arr[mid] === arr[low]) {
            low = mid + 1;
          } else if (arr[mid] === arr[high]) {
            high = mid - 1;
          } else {
            // se mid é diferente de ambos, ele é o único
            return arr[mid];
          }
        }
      
        if(arr[0] !== arr[1]) return arr[0];
        if(arr[arr.length - 1] !== arr[arr.length - 2]) return arr[arr.length - 1];
        return -1; // o único elemento diferente
      }

      public searchBinary(n: number): number {
        let arrOrdened = [...this.arr].sort((a, b) => a - b);
        let low = 0;
        let high = arrOrdened.length - 1;
    
        if (n < arrOrdened[0] || n > arrOrdened[arrOrdened.length - 1]) {
          return -1;
        }
    
        for (let i = 0; low <= high; i++) {
          let mid = Math.floor((low + high) / 2);
    
          if (arrOrdened[mid] === n) {
            return mid;
          } else if (arrOrdened[mid] < n) {
            low = mid + 1;
          } else {
            high = mid - 1;
          }
        }
        return -1;
      }
    
      
}
