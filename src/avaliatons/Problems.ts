export default class Problems {
    private n: number;

    constructor(n: number){
        this.n = n;
    }

    public primeirosMenores(): number[]{
        let arr: number[] = [];

        for (let i = 2; i < this.n; i++) {
            let isPrime = true;

            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                arr.push(i);
            }
        }

        return arr;
    }
}
