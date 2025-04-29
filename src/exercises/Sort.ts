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

        return this.c
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
        let sortArr: number[] = this.arr;
        let compare: number = 0;
        let swap: number = 0;

        for (let i = 0; i < sortArr.length; i++) {
            for (let j = i; j < sortArr.length; j++) {
                if (sortArr[i] > sortArr[j]) {
                    [sortArr[i], sortArr[j]] = [sortArr[j], sortArr[i]];
                    swap++
                }
                compare++
            }
        }

        return `${sortArr} compare: ${compare}, swap: ${swap}`;
    }

    public selectionSortImproved(): string {
        let sortArr: number[] = this.arr;
        let compare: number = 0;
        let swap: number = 0;

        for (let i = 0; i < sortArr.length - 1; i++) {
            let pos = i;
            for (let j = i + 1; j < sortArr.length; j++) {
                compare++
                if (sortArr[pos] > sortArr[j]) {
                    pos = j;
                }
            }
            if (pos != i) {
                swap++
                [sortArr[i], sortArr[pos]] = [sortArr[pos], sortArr[i]];
            }
        }

        return `${sortArr} compare: ${compare}, swap: ${swap}`;
    }

    public insertionSort(): string {

    }
}

export class UnidimensionalArray { }

