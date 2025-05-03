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
}
