// Lucas Gontarz Fajardo, Lucas Eduardo Aurelio
export default class Draw {
    private arr: string[];


    constructor(arr: string[]) {
        this.arr = arr;
    }

    public getArr(): string[]{
        return this.arr;
    }

    public setArr(arr: string[]): void {
        this.arr = arr;
    }

    public getInvalid(): string[] {
        const repeated: string[] = [];

        for (let i = 0; i < this.arr.length; i++) {
            const current = this.arr[i];
            let count = 0;

            for (let j = 0; j < this.arr.length; j++) {
                if (this.arr[j] === current) {
                    count++;
                }
            }

            if (count > 1 && !this.contains(repeated, current)) {
                repeated.push(current);
            }
        }

        return this.sort(repeated);
    }

    public getValid(): string[] {
        const invalid = this.getInvalid();
        const valid: string[] = [];

        for (let i = 0; i < this.arr.length; i++) {
            const current = this.arr[i];

            if (!this.contains(invalid, current) && !this.contains(valid, current)) {
                valid.push(current);
            }
        }

        return this.sort(valid);
    }

    public getWinner(): string {
        let winner: string;

        const valid = this.getValid();
        const i = Math.floor(Math.random() * valid.length);
        winner = valid[i];
        return winner;
    }

    private contains(arr: string[], name: string): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === name) return true;
        }
        return false;
    }

    private sort(arr: string[]): string[] {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
        return arr;
    }
}
