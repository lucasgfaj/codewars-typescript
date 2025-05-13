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
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    const med = sum / arr.length;

    let nextMedia = arr[0];
    let minorDifference = Math.abs(arr[0] - med);

    for (let i = 1; i < arr.length; i++) {
        const dif = Math.abs(arr[i] - med);
        if (dif < minorDifference) {
            minorDifference = dif;
            nextMedia = arr[i];
        }
    }

    return nextMedia;
}

public reduce(n: number): number[] {
    const arr: number[] = [...this.arr];

    for(let i = arr.length; arr.length > n; i--){
        arr.pop();
    }

    return arr;
}

public slice(init: number, end: number): number[]{
    const arr: number[] = [...this.arr];
    const slice: number[] = [];
    for(let i = 0; i < arr.length; i++){
        if(init >= i && i <= end){
            slice.push(arr[i]);
        }
    }
    return slice
}

public reverse(): number[] {
    const arr: number[] = [...this.arr]; 
    return this.reverseAux(arr, arr.length - 1, []);
}

private reverseAux(arr: number[], index: number, result: number[]): number[] {
    if (index < 0) return result;
    
    result.push(arr[index]);
    return this.reverseAux(arr, index - 1, result);
}

public reverseWithFor(){
    let auxReverse: number[] = [];
    let arr: number[] = [...this.arr];

    for(let i = arr.length -1; i > -1; i--){
        auxReverse.push(arr[i]);
    }
}

public amplitude(){
    const arr: number[] = [...this.arr];
    arr.sort((a, b) => a - b);
    return Math.abs(arr[0] - arr[arr.length -1]);
}

}