export class SortThree {
    private a;
    private b;
    private c;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // getters and setters
    public getA(): number {
        return this.a;
    }

    public getB(): number {
        return this.b;
    }

    public getC(): number {
        return this.c;
    }

    public setA(a: number): void {
        this.a = a;
    }

    public setB(b: number): void {
        this.b = b;
    }

    public setC(c: number): void {
        this.c = c;
    }

    public orderThree(): number[] {

        if (this.a < this.b) {
            [this.a, this.b] = [this.b, this.a];
        }

        if (this.a < this.c) {
            [this.a, this.c] = [this.c, this.a];
        }

        if (this.b < this.c) {
            [this.b, this.c] = [this.c, this.b];
        }

        return [this.a, this.b, this.c];
    }

    public biggerThree(): number {

        if (this.a >= this.b && this.a >= this.c) {
            return this.a;
        }
        if (this.b >= this.a && this.b >= this.c) {
            return this.b;
        }

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


    public selectionSort(): string {
        let arr: number[] = this.arr;
        let compare = 0;
        let swap = 0;

        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
                compare++;

                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                swap++;
            }
        }
        return `Selection Sort in ${compare} comparisons and ${swap} swaps.`;

    }

    public selectionSortRecursivity(): string {
     return this.selectionSortAux(this.arr);
    }

    public selectionSortAux(arr: number[], index = 0, compare = 0, swap = 0): string {
        
        if (index >= arr.length - 1) {
            return `Selection Sort in ${compare} comparisons and ${swap} swaps. Arr ${arr}`;
        }
        
        let localCompare = 0;
        let minIndex = index
        for (let j = index + 1; j < arr.length; j++) {
            localCompare++;
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }        
        }

        if(minIndex !== index) {
            [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
            swap++;
        }
        // Chama a função recursivamente para o próximo índice
        return this.selectionSortAux(arr, index + 1, compare + localCompare, swap);
    }

    public bubbleSort(): string {
        let arr: number[] = this.arr;
        let compare = 0;
        let swap = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                compare++;
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swap++;
                }
            }
        }
        return `Bubble Sort in ${compare} comparisons and ${swap} swaps.`;

    }

    public insertionSort(): string {
        let arr: number[] = this.arr;
        let compare = 0;
        let swap = 0;

        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;

            while (j >= 0 && arr[j] > key) {
                compare++;
                arr[j + 1] = arr[j];
                j--;
                swap++;
            }

            arr[j + 1] = key;

        }
        return `Insertion Sort in ${compare} comparisons and ${swap} swaps.`;
    }

    public bubbleSortUpdate(): string {
        let arr: number[] = this.arr;
        let compare = 0;
        let swap = 0;
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            let swapped = false; // Flag para verificar se houve troca

            for (let j = 0; j < n - 1 - i; j++) {
                compare++;
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swap++;
                    swapped = true; // Se houve troca, marca
                }
            }

            // Se não houve troca, array já está ordenado
            if (!swapped) {
                break;
            }
        }

        return `Bubble Sort in ${compare} comparisons and ${swap} swaps.`;
    }
}

export class UnidimensionalArray {
    private arr: number[];
    readonly TAM: number = 10;

    constructor(arr: number[]) {
        this.arr = arr;
    }
    public getArr(): number[] {
        return this.arr;
    }

    public setArr(arr: number[]): void {
        this.arr = arr;
    }

    public isOrdered(): boolean {
        for (let i = 0; i < this.arr.length - 1; i++) {
            if (this.arr[i] > this.arr[i + 1])
                return false
        }
        return true
    }
    public shuffle(arr: number[]): number[] {;

        for (let i = this.TAM - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // índice aleatório entre 0 e i
            [arr[i], arr[j]] = [arr[j], arr[i]]; // troca os elementos arr[i] e arr[j]
        }

        return arr;
    }

    public gnomeSort(): string {
        let arr: number[] = this.shuffle(this.arr);
        let index = 0;
        let compare = 0;
        let swap = 0;
        while (index < this.TAM) {
            if (index === 0) index++;
            if (arr[index] >= arr[index - 1]) index++;
            else {
                [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]]
                index--;
                swap++;
            }
            compare++;
        }
        return `Gnome Sort in ${compare} comparisons and ${swap} swaps. Arr ${arr}`;
    }
}