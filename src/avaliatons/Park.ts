// Lucas Gontarz Fajardo, Lucas Eduardo Aurelio
export default class Park {
    private queue: number[];

    constructor(queue: number[]) {
        this.queue = queue;
    }

    public getLine(): number[] {
        return this.queue;
    }

    public setLine(queue: number[]): void {
        this.queue = queue;
    }

    public getSorted(): number[] {
        let arr = [...this.queue];


        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === -1) {
                i++
            }
            let min = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min] && arr[j] !== -1) {
                    min = j;
                }
            }
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
        return arr;
    }

}