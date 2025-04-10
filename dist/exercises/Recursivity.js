"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Recursivity {
    constructor() {
    }
    // MENSAGEM – Implemente um método que exiba n vezes uma mensagem na telaK
    message(n) {
        if (n > 0)
            return "Eu uso Recursividade\n" + this.message(n - 1);
        return "";
    }
    // CONTAGEM PROGRESSIVA – Dado um inteiro positivo n, realize a contagem progressiva de 1 até n.
    countRegress(n) {
        if (n > 0)
            return `${n} \n` + this.countRegress(n - 1);
        return "Fire!";
    }
    // CONTAGEM DE A ATÉ B – dados os inteiros a e b, realize a contagem progressiva de a até b.
    // Use a mesma classe para os exercícios 4 e 5.
    countPoints(a, b) {
        if (a > b) {
            return "\nFim";
        }
        return `${a}\n` + this.countPoints(a + 1, b);
    }
    // SOMA DO INTERVALO – Dados dois números, os limites superior e inferior de um intervalo, retorne
    // a soma dos inteiros neste intervalo fechado. O limite superior sempre será maior, ou igual, ao inferior
    sumInterval(a, b) {
        if (a > b)
            return 0;
        return a + this.sumInterval(a + 1, b);
    }
    //SOMA DO INTERVALO APRIMORADA – Aprimore a resolução anterior para que os limites sejam
    // invertidos no caso do limite inferior ser maior do que o inferior. Assim, quando for pedido que a função
    // retorne a soma do intervalo [10, 1], será tratado da mesma forma do que a soma de [1, 10].
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
}
exports.default = Recursivity;
