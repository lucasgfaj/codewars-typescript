"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FirstPrime {
    constructor(n) {
        this.n = n;
    }
    isPrimo(n) {
        if (n <= 1)
            return false;
        if (n === 2)
            return true;
        if (n % 2 === 0)
            return false;
        const sqrtN = Math.sqrt(n);
        for (let i = 3; i <= sqrtN; i += 2) {
            if (n % i === 0)
                return false;
        }
        return true;
    }
    primeirosPrimos() {
        const arrPrimes = [];
        for (let i = 2; arrPrimes.length < this.n; i++) {
            if (this.isPrimo(i)) {
                arrPrimes.push(i);
            }
        }
        return arrPrimes;
    }
}
exports.default = FirstPrime;
