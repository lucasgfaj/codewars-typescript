export default class FirstPrime {

    n: number;
    constructor (n: number) {
        this.n = n;
    }

    private isPrimo(n: number): boolean{
        if (n <= 1) return false;
        if (n === 2 ) return true
        if (n % 2 === 0) return false;
     
        for (let i = 3; i * i <= n; i += 2 ){
            if (n % i === 0) return false;
        }
        return true;
    }

    public primeirosPrimos(): number[] {
        const arrPrimes: number[] = [];

        for(let i = 2; arrPrimes.length < this.n; i++){
            if(this.isPrimo(i)){
                arrPrimes.push(i);
            }
        }
  
        return arrPrimes;
    }
}