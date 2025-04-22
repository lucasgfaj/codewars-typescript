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

    // MENSAGEM – Implemente um método que exiba n vezes uma mensagem na tela
    public message(): string {
        return this.messageAux(this.n);
    }

    private messageAux(n: number): string {
        if (n > 0) return "Eu uso Recursivade " + this.messageAux(n - 1);
        return "";
    }

    // CONTAGEM PROGRESSIVA – Dado um inteiro positivo n, realize a contagem progressiva de 1 até n.
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

    // CONTAGEM DE A ATÉ B – dados os inteiros a e b, realize a contagem progressiva de a até b
    public countProgress(): string {
        return this.countProgressAux(this.a);
    }

    private countProgressAux(a: number): string {
        if (a <= this.b) {
            return `${a}\n` + this.countProgressAux(a + 1);
        }
        return `Fim\n`;
    }

    // SOMA DO INTERVALO – Dados dois números, os limites superior e inferior de um intervalo, retorne
    // a soma dos inteiros neste intervalo fechado. O limite superior sempre será maior, ou igual, ao inferior.
    public sumInterval(): number {
        return this.sumIntervalAux(this.a);
    }

    private sumIntervalAux(a: number): number {
        if (a > this.b) return 0;
        return a + this.sumIntervalAux(a + 1);
    }


    // SOMA DO INTERVALO APRIMORADA – Aprimore a resolução anterior para que os limites sejam
    // invertidos no caso do limite inferior ser maior do que o inferior. Assim, quando for pedido que a função
    // retorne a soma do intervalo [10, 1], será tratado da mesma forma do que a soma de [1, 10].
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

export class RecursivityNacci {
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

    // FATORIAL – Dado um inteiro n, retorne n!

    public factorial(): number {
        return this.factorialAux(this.n);
    }

    private factorialAux(n: number): number {
        if (n < 2) {
            return 1;
        }
        return n * this.factorialAux(n - 1)
    }

    // POTÊNCIA – Dados a base e um expoente positivo, retorne baseexpoente. Assuma o valor de n como base.

    public potentialAux(exp: number): number {
        if (exp == 0) return 1;
        if (exp < 2) return this.n;

        return this.n * this.potentialAux(exp - 1);
    }

    // FIBONACCI – Dado um inteiro positivo n, retorne o n-ésimo termo da série de Fibonacci. Saiba que
    // os dois primeiros termos desta série são 1 e 1 e os demais são gerados a partir da soma dos
    // anteriores: 1 1 2 3 5 8 13 21...

    public fibonacci(): number {
        return this.fibonacciAux(this.n);
    }

    private fibonacciAux(n: number): number {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return this.fibonacciAux(n - 1) + this.fibonacciAux(n - 2);
    }

    // TRIBONACCI – Este exercício é uma mera progressão do anterior. Dado um inteiro positivo n,
    // imprima o n-ésimo termo da série de Tribonacci. Saiba que os três primeiros termos desta série são
    // 1, 1 e 2; e os demais são gerados a partir da soma dos anteriores: 1 1 2 4 7 13 24 44...

    public tribonacci(): number {
        return this.tribonacciAux(this.n);
    }

    private tribonacciAux(n: number): number {
        if (n === 0) return 0; // O primeirot termo é 0
        if (n === 1 || n === 2) return 1;  // O segundo termo é 1
        if (n === 3) return 2; // O terceiro termo é 2

        return this.tribonacciAux(n - 1) + this.tribonacciAux(n - 2) + this.tribonacciAux(n - 3);
    }

    // TETRANACCI – Este exercício é uma mera progressão do anterior (que é uma mera progressão do
    // anterior… e isso é recursividade). Dado um inteiro positivo n, imprima o n-ésimo termo da série de
    // Tetranacci. Saiba que os quatro primeiros termos desta série são 1, 1, 2 e 4; e os demais são
    // gerados a partir da soma dos anteriores: 1 1 2 4 8 15 29 56...

    public tetranacci(): number {
        return this.tetranacciAux(this.n);
    }

    private tetranacciAux(n: number): number {
        if (n === 0) return 0;
        if (n === 1 || n === 2) return 1;
        if (n === 3) return 2;
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

    // PRIMEIRA OCORRÊNCIA – Dado um inteiro e uma matriz unidimensional de 20 inteiros (convenção
    // para os próximos exercícios), não ordenados, retorne a posição da primeira ocorrência do inteiro na
    // matriz. Caso não haja ocorrência, retorne -1.

    public firstOcorrency(): number {
        return this.firstOcorrencyAux(this.n);
    }

    private firstOcorrencyAux(n: number, index: number = 0): number {
        if (index > this.arr.length) return -1;
        if (this.arr[index] === n) return index;

        return this.firstOcorrencyAux(n, index + 1);
    }

    // PRIMEIRA OCORRÊNCIA ORDENADO – Idem ao anterior, mas suponha que a matriz
    // unidimensional esteja ordenada. Preze pela eficiência.

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

    //     MAIOR ELEMENTO – Considere a mesma matriz unidimensional, não ordenada.Retorne
    // recursivamente o maior elemento.

    public biggerElement(): number {
        return this.biggerElementAux(this.arr);
    }


    private biggerElementAux(arr: number[], i: number = 0, acc: number = 0): number {
        if (i >= arr.length) return acc;

        if (arr[i] > acc) acc = arr[i]; // Podemos Remover este 

        return this.biggerElementAux(arr, i + 1, acc);
        // return this.biggerElementAux(arr, i + 1, Math.max(acc, arr[i])); // Podemos usar o Math.max para simplificar

    }

    // SOMA DOS ELEMENTOS – Considere a mesma matriz unidimensional, não ordenada. Retorne
    // recursivamente soma dos elementos.

    public sumElements(): number {
        return this.sumElementsAux(this.arr);
    }

    private sumElementsAux(arr: number[], index: number = 0): number {
        if (index >= arr.length) return 0;
        return arr[index] + this.sumElementsAux(arr, index + 1);
    }

    // NÚMERO DE OCORRÊNCIAS – Considere a mesma matriz unidimensional, não ordenada. Dado um
    // inteiro, retorne recursivamente quantas ocorrências deste há na matriz.

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

    // ESTÁ ORDENADO – Considere a mesma matriz unidimensional, não ordenada. Retorne se a matriz
    // unidimensional está em ordem crescente. Verifique recursivamente.

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

// Aplicando o pensamento como o professor.

export class isRecursivityABSRandomARR {
    private arr: number[]
    readonly TAM: number = 20;

    constructor() {
        this.arr = [];

        for (let i = 0; i < this.TAM; i++) {
            this.arr[i] = Math.ceil(Math.random() * 5);
        }
    }

    public toString(): string {
        return this.arr.toString();
    }

    public getArr(): number[] {
        return this.arr
    }

    public setArr(arr: number[]): void {
        this.arr = arr;
    }



    // PRIMEIRA OCORRÊNCIA – Dado um inteiro e uma matriz unidimensional de 20 inteiros (convenção
    // para os próximos exercícios), não ordenados, retorne a posição da primeira ocorrência do inteiro na
    // matriz. Caso não haja ocorrência, retorne -1.

    public firstOcorrency(n: number): number {
        return this.firstOcorrencyAux(n);
    }

    private firstOcorrencyAux(n: number, index: number = 0): number {
        if (index > this.TAM) return -1;
        if (this.arr[index] === n) return index;

        return this.firstOcorrencyAux(n, index + 1);
    }

    // PRIMEIRA OCORRÊNCIA ORDENADO – Idem ao anterior, mas suponha que a matriz
    // unidimensional esteja ordenada. Preze pela eficiência.

    public firstOcorrencyOrdered(n: number): number {
        return this.firstOcorrencyOrderedAux(n, 0, this.arr.length - 1);
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

    //     MAIOR ELEMENTO – Considere a mesma matriz unidimensional, não ordenada.Retorne
    // recursivamente o maior elemento.

    public biggerElement(): number {
        return this.biggerElementAux(this.arr);
    }


    private biggerElementAux(arr: number[], i: number = 0, acc: number = 0): number {
        if (i >= this.TAM) return acc;

        if (arr[i] > acc) acc = arr[i]; // Podemos Remover este 

        return this.biggerElementAux(arr, i + 1, acc);
        // return this.biggerElementAux(arr, i + 1, Math.max(acc, arr[i])); // Podemos usar o Math.max para simplificar

    }

    // SOMA DOS ELEMENTOS – Considere a mesma matriz unidimensional, não ordenada. Retorne
    // recursivamente soma dos elementos.

    public sumElements(): number {
        return this.sumElementsAux(this.arr);
    }

    private sumElementsAux(arr: number[], index: number = 0): number {
        if (index >= arr.length) return 0;
        return arr[index] + this.sumElementsAux(arr, index + 1);
    }

    // NÚMERO DE OCORRÊNCIAS – Considere a mesma matriz unidimensional, não ordenada. Dado um
    // inteiro, retorne recursivamente quantas ocorrências deste há na matriz.

    public numbersOcorrencys(n: number): number {
        return this.numbersOcorrencysAux(n);
    }

    private numbersOcorrencysAux(n: number, i: number = 0, ocorrencys: number = 0): number {
        if (i >= this.TAM) return ocorrencys;

        if (this.arr[i] === n) {
            ocorrencys++;
        }
        return this.numbersOcorrencysAux(n, i + 1, ocorrencys);
    }

    // ESTÁ ORDENADO – Considere a mesma matriz unidimensional, não ordenada. Retorne se a matriz
    // unidimensional está em ordem crescente. Verifique recursivamente.

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

}

