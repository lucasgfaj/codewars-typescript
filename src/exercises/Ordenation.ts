export class sortThree{
    private a;
    private b;
    private c;

    constructor(a: number, b: number, c: number){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // getters and setters
    public getA(): number{
        return this.a;
    }

    public getB(): number{
        return this.b;
    }

    public getC(): number{
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

    public orderThree(): number[]{

        if(this.a < this.b){
            [this.a, this.b] = [this.b, this.a];
        }

        if(this.a < this.c){
            [this.a, this.c] = [this.c, this.a];
        }

        if(this.b < this.c){
            [this.b, this.c] = [this.c, this.b];
        }

        return [this.a, this.b, this.c];
    }

    public biggerThree(): number {

        if (this.a >= this.b && this.a >= this.c) {
            return this.a;
        }
        if (this.b >= this.a && this.b >= this.c){
            return this.b;
        }

        return this.c;
        }
}

export class sortCheap  {
    private arr: number[];

    constructor(arr: number[]){
        this.arr = arr;
    }

    public getArr(): number[]{
        return this.arr;
    }

    public setArr(arr: number[]): void {
        this.arr = arr;
    }


    public selectionSort(): void {}
    
    public bubbleSort(): void {}

    public insertionSort(): void {}

}