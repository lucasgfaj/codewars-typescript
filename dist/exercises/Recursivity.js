"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fatorial = void 0;
class Recursivity {
    constructor() { }
    message(n) {
        if (n > 0)
            return "Eu uso Recursividade\n" + this.message(n - 1);
        return "";
    }
    countRegress(n) {
        if (n > 0)
            return `${n} \n` + this.countRegress(n - 1);
        return "Fire!";
    }
    countPoints(a, b) {
        if (a > b) {
            return "\nFim";
        }
        return `${a}\n` + this.countPoints(a + 1, b);
    }
    sumInterval(a, b) {
        if (a > b)
            return 0;
        return a + this.sumInterval(a + 1, b);
    }
    sumIntervaEnhancement(a, b) {
        let c = 0;
        if (a > b) {
            [a, b] = [b, a]; // desestruturação para inversão
            // podemos fazer tambem criar um variavel externa para troca do numeros
        }
        if (a === b) {
            return a;
        }
        return a + this.sumIntervaEnhancement(a + 1, b);
    }
    factorial(n) {
        if (n === 0 || n === 1)
            return 1;
        return n * this.factorial(n - 1);
        // fatorial é tipo !4 = 1 * 2 * 3 * 4 que da 24
    }
    isPotence(n, exp) {
        if (exp === 0) {
            return 1;
        }
        // no caso estamos multiplancado n * n, porém a quantidade de vase é definada por exp - 1 a cada chamada da recursividade
        // ela diminui 1: exemplo 
        // dado parametros 2, 2
        //return 2 * isPotence(2, 1)
        //return 2 * isPotence(2, 0)
        // Total será 4 
        return n * this.isPotence(n, exp - 1);
    }
    fibonacci(n) {
        if (n === 1 || n === 2)
            return 1; // Primeiro termo é 1
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
    tribonacci(n) {
        if (n === 0)
            return 0; // O primeirot termo é 0
        if (n === 1 || n === 2)
            return 1; // O segundo termo é 1
        if (n === 3)
            return 2; // O terceiro termo é 2
        return this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3);
    }
    tetranacci(n) {
        if (n === 0)
            return 1; // O primeiro termo é 1
        if (n === 1)
            return 1; // O segundo termo é 1
        if (n === 2)
            return 2; // O terceiro termo é 2
        if (n === 3)
            return 4; // O quarto termo é 4
        return this.tetranacci(n - 1) + this.tetranacci(n - 2) + this.tetranacci(n - 3) + this.tetranacci(n - 4);
    }
    firstOcorrency(n, matriz, index = 0) {
        if (index >= matriz.length)
            return -1;
        if (matriz[index] === n)
            return index;
        return this.firstOcorrency(n, matriz, index + 1);
    }
    firstOcorrencyOrdered(n, matriz, index, last) {
        if (index > last)
            return -1;
        let mid = Math.floor((last + index) / 2);
        if (matriz[mid] == n) {
            // Encontra o elemento, porem pode haver outros elementos iguais
            const leftSearch = this.firstOcorrencyOrdered(n, matriz, index, mid - 1);
            return (leftSearch != -1) ? leftSearch : mid;
        }
        else if (matriz[mid] < n) {
            // Procura na metade da direita
            return this.firstOcorrencyOrdered(n, matriz, mid + 1, last);
        }
        else {
            // Procura na metade da esquerda
            return this.firstOcorrencyOrdered(n, matriz, index, mid - 1);
        }
    }
    biggerElement(matriz, i = 0, acc = 0) {
        if (i >= matriz.length)
            return acc;
        if (matriz[i] > acc)
            acc = matriz[i];
        return this.biggerElement(matriz, i + 1, acc);
    }
    sumElements(matriz, i = 0, sum = 0) {
        if (i >= matriz.length)
            return sum;
        sum += matriz[i];
        return this.sumElements(matriz, i + 1, sum);
    }
    numbersOcorrencys(n, matriz, i = 0, ocorrencys = 0) {
        if (i >= matriz.length)
            return ocorrencys;
        if (matriz[i] === n) {
            ocorrencys++;
        }
        return this.numbersOcorrencys(n, matriz, i + 1, ocorrencys);
    }
    isOrdered(matriz, i = 0) {
        if (i >= matriz.length - 1)
            return "Ordered";
        if (matriz[i] > matriz[i + 1]) {
            return "Not Ordered";
        }
        return this.isOrdered(matriz, i + 1);
    }
    sumDigits(n) {
        if (n === 0)
            return 0;
        return (n % 10) + this.sumDigits(Math.floor(n / 10));
    }
}
exports.default = Recursivity;
class Fatorial {
    constructor(n) {
        this.n = Math.abs(n);
    }
    getN() {
        return this.n;
    }
    setN(n) {
        this.n = n;
    }
    //get() e set()
    fatorial() {
        return this.fatorialAux(this.n);
    }
    fatorialAux(x) {
        if (x < 2)
            return 1;
        return x * this.fatorialAux(x - 1);
    }
    potencia(expoente) {
        expoente = Math.abs(expoente);
        if (expoente == 0) {
            return 1;
        }
        if (expoente < 2) {
            return this.n;
        }
        return this.n * this.potencia(expoente - 1);
    }
}
exports.Fatorial = Fatorial;
