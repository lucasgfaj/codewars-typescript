export class RecursivityisN {
    private n: number;

    constructor(n: number) {
        this.n = n
    }

    public getN(): number {
        return this.n
    }

    public setN(n: number): void {
        this.n = n
    }

    public message(): string {
        return this.messageAux(this.n);
    }

    private messageAux(n: number): string {
        if (n > 0) return "Eu uso Recursivade" + this.messageAux(n - 1);
        return "";
    }

    public regressiveCount(): string {
        return this.regressiveCountAux(this.n);
    }

    private regressiveCountAux(n: number): string {
        if (n > 0) {
            return `${n}...\n` + this.regressiveCountAux(n - 1);
        }
        return "Fire!";
    }
}

export class RecursivityisAB {
    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public getA(): number {
        return this.a;
    }

    public getB(): number {
        return this.b;
    }

    public setA(a: number): void {
        this.a = a;
    }

    public setB(b: number): void {
        this.b = b;
    }

    public countProgress(): string {
        return this.countProgressAux(this.a);
    }

    private countProgressAux(a: number): string {
        if (a <= this.b) {
            return `${a}\n` + this.countProgressAux(a + 1);
        }
        return `Fim\n`;
    }

    public sumInterval(): number {
        return this.sumIntervalAux(this.a);
    }

    private sumIntervalAux(a: number): number {
        if (a > this.b) return 0;
        return a + this.sumIntervalAux(a + 1);
    }

    public sumIntervalImproved(): number {

        let a: number = this.a;
        let b: number = this.b;

        if (a > b) { [a, b] = [b, a]; }
        return this.sumIntervalImprovedAux(a, b);
    }

    private sumIntervalImprovedAux(a: number, b: number): number {
        if (a > b) return 0;
        return a + this.sumIntervalImprovedAux(a + 1, b);
    }
}

export class RecursivityN {
    private n: number

    constructor(n: number) {
        this.n = Math.abs(n);
    }

    public getN(): number {
        return this.n;
    }

    public setN(n: number): void {
        this.n = Math.abs(n);
    }

    public factorial(): number {
        return this.factorialAux(this.n);
    }

    private factorialAux(n: number): number {
        if (n < 2) {
            return 1;
        }
        return n * this.factorialAux(n - 1)
    }

    public potentialAux(exp: number): number {
        if (exp == 0) return 1;
        if (exp < 2) return this.n;

        return this.n * this.potentialAux(exp - 1);
    }

    public fibonacci(): number {
        return this.fibonacciAux(this.n);
    }

    private fibonacciAux(n: number): number {
        if (n === 1 || n === 2) return 1;

        return this.fibonacciAux(n - 1) + this.fibonacciAux(n - 2);
    }

    public tribonacci(): number {
        return this.tribonacciAux(this.n);
    }

    private tribonacciAux(n: number): number {
        if (n === 0) return 0; // O primeirot termo é 0
        if (n === 1 || n === 2) return 1;  // O segundo termo é 1
        if (n === 3) return 2; // O terceiro termo é 2

        return this.tribonacciAux(n - 1) + this.tribonacciAux(n - 2) + this.tribonacciAux(n - 3);
    }

    public tetranacci(): number {
        return this.tetranacciAux(this.n);
    }

    private tetranacciAux(n: number): number {
        if (n === 0 || n === 1)   return 1;
        if (n === 2) return 2;
        if (n === 3) return 4;

        return this.tetranacciAux(n - 1) + this.tetranacciAux(n - 2) + this.tetranacciAux(n - 3) + this.tetranacciAux(n - 4);

    }

}


export class isRecursivityABS {
    private n: number
    private arr: number[];

    constructor(n: number, arr: number[]) {
        this.n = Math.abs(n);
        this.arr = arr;
    }

    public getN(): number {
        return this.n;
    }

    public getArr(): number[] {
        return this.arr
    }

    public setN(n: number): void {
        this.n = Math.abs(n);
    }

    public setArr(arr: number[]): void {
        this.arr = arr;
    }

    public firstOcorrency(): number {
        return this.firstOcorrencyAux(this.n);
    }

    private firstOcorrencyAux(n: number, index: number = 0): number {
        if (index > this.arr.length) return -1;
        if (this.arr[index] === n) return index;

        return this.firstOcorrencyAux(n, index + 1);
    }

    public firstOcorrencyOrdered(): number {
        return this.firstOcorrencyOrderedAux(this.n, 0, this.arr.length - 1);
    }

    private firstOcorrencyOrderedAux(n: number, index: number = 0, last: number = 0): number {
        if (index > last) return -1;

        let mid: number = Math.floor((last + index) / 2);

        if (this.arr[mid] == n) {
            // Encontra o elemento, porem pode haver outros elementos iguais
            const leftSearch = this.firstOcorrencyOrderedAux(n, index, mid - 1)
            return (leftSearch != -1) ? leftSearch : mid;
        } else if (this.arr[mid] < n) {
            // Procura na metade da direita
            return this.firstOcorrencyOrderedAux(n, mid + 1, last);
        } else {
            // Procura na metade da esquerda
            return this.firstOcorrencyOrderedAux(n, index, mid - 1);
        }

    }

    public biggerElement(): number {
        return this.biggerElementAux(this.arr);
    }


    private biggerElementAux(arr: number[], i: number = 0, acc: number = 0): number {
        if (i >= arr.length) return acc;

        if (arr[i] > acc) acc = arr[i];

        return this.biggerElementAux(arr, i + 1, acc);
    }


    public sumElements(): number {
        return this.sumElementsAux(this.arr);
    }

    private sumElementsAux(matriz: number[], i: number = 0, sum: number = 0): number {
        if (i >= matriz.length) return sum;

        sum += matriz[i];

        return this.sumElementsAux(matriz, i + 1, sum);
    }

    public numbersOcorrencys(): number {
        return this.numbersOcorrencysAux(this.n)
    }

    private numbersOcorrencysAux(n: number, i: number = 0, ocorrencys: number = 0): number {
        if (i >= this.arr.length) return ocorrencys;

        if (this.arr[i] === n) {
            ocorrencys++;
        }
        return this.numbersOcorrencysAux(n, i + 1, ocorrencys);
    }

    public isOrdered(): string {
        return this.isOrderedAux(this.arr);
    }

    private isOrderedAux(matriz: number[], i: number = 0): string {
        if (i >= matriz.length - 1) return "Ordered";

        if (matriz[i] > matriz[i + 1]) {
            return "Not Ordered";
        }
        return this.isOrderedAux(matriz, i + 1);

    }

    public sumDigits(): number {
        return this.sumDigitsAux(this.n);
    }

    private sumDigitsAux(n: number): number {
        if (n === 0) return 0;
        return (n % 10) + this.sumDigitsAux(Math.floor(n / 10));
    }


}