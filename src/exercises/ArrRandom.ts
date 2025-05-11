export default class ArrayRandom{
    private n: number;
    private arr: number[] = []

    public constructor(n: number){
        this.n = n;

        for(let i = 0; i < n; i++){
            const randomInt = Math.floor(Math.random() * 100);
            this.arr.push(randomInt);
        }
    }

    public getN(): number {
        return this.n
    }

    public setN(n: number): void {
        this.n = n;
    }

    public getArr(): number[] {
        return this.arr;
    }

    public toString(): string{
        return this.arr.join(", ");
    }

    public cutValue(n: number): number[] {
        const arr = [...this.arr];

        for(let i = arr.length -1 ; i >= 0; i--){
            if(n >= arr[i]){
                arr.splice(i, 1);
            }
        }

        return arr;

    }

    public removeMultiples(n: number): number[] {
        const arr = [...this.arr];

        if(n === 0) return arr;

        for(let i = arr.length -1; i >= 0; i--){
            if((i + 1) % n === 0){
                arr.splice(i, 1);
            }
        }
        return arr
    }

    public nextMedia(): number {
        const arr = [...this.arr];
        let n: number = 0;

        
    
        return n;
    }
}