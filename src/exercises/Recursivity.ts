export default class Recursivity {
  constructor() {}

  // MENSAGEM – Implemente um método que exiba n vezes uma mensagem na telaK
  public message(n: number): string {
    if (n > 0) return "Eu uso Recursividade\n" + this.message(n - 1);
    return "";
  }

  // CONTAGEM PROGRESSIVA – Dado um inteiro positivo n, realize a contagem progressiva de 1 até n.
  public countRegress(n: number): string {
    if (n > 0) return `${n} \n` + this.countRegress(n - 1);
    return "Fire!";
  }

  // CONTAGEM DE A ATÉ B – dados os inteiros a e b, realize a contagem progressiva de a até b.
  // Use a mesma classe para os exercícios 4 e 5.
  public countPoints(a: number, b: number): string {
    if (a > b) {
      return "\nFim";
    }

    return `${a}\n` + this.countPoints(a + 1, b);
  }

  // SOMA DO INTERVALO – Dados dois números, os limites superior e inferior de um intervalo, retorne
  // a soma dos inteiros neste intervalo fechado. O limite superior sempre será maior, ou igual, ao inferior

  public sumInterval(a: number, b: number): number {
    if (a > b) return 0;

    return a + this.sumInterval(a + 1, b);
  }

  //SOMA DO INTERVALO APRIMORADA – Aprimore a resolução anterior para que os limites sejam
  // invertidos no caso do limite inferior ser maior do que o inferior. Assim, quando for pedido que a função
  // retorne a soma do intervalo [10, 1], será tratado da mesma forma do que a soma de [1, 10].

  public sumIntervaEnhancement(a: number, b: number): number {
    let c: number = 0;

    if (a > b) {
      [a, b] = [b, a]; // desestruturação para inversão
      // podemos fazer tambem criar um variavel externa para troca do numeros
    }

    if (a === b) {
      return a;
    }

    return a + this.sumIntervaEnhancement(a + 1, b);
  }

  // FATORIAL – Dado um inteiro n, retorne n!.
  // Use a mesma classe para os exercícios 7, 8, 9 e 10.

  public factorial(n: number): number {
    if (n === 0 || n === 1) return 1;

    return n * this.factorial(n - 1);
    // fatorial é tipo !4 = 1 * 2 * 3 * 4 que da 24
    // mas a soma é 1 + 2 + 3 + 4 que da 10
  }

  //POTÊNCIA – Dados a base e um expoente positivo, retorne baseexpoente. Assuma o valor de n como
  // base.

  public isPotence(n:number, exp: number): number {
    if(exp === 0){
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

  // FIBONACCI – Dado um inteiro positivo n, retorne o n-ésimo termo da série de Fibonacci. Saiba que
  // os dois primeiros termos desta série são 1 e 1 e os demais são gerados a partir da soma dos
  // anteriores: 1 1 2 3 5 8 13 21...

  public fibonacci(n: number): number{
    if (n === 1 || n === 2) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  // TRIBONACCI – Este exercício é uma mera progressão do anterior. Dado um inteiro positivo n,
  // imprima o n-ésimo termo da série de Tribonacci. Saiba que os três primeiros termos desta série são
  // 1, 1 e 2; e os demais são gerados a partir da soma dos anteriores: 1 1 2 4 7 13 24 44...

  public tribonacci(n: number): number {
    if (n === 0) return 0; 
    if (n === 1 || n === 2) return 1; 
    return this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3);
  }

  // TETRANACCI – Este exercício é uma mera progressão do anterior (que é uma mera progressão do
  //     anterior… e isso é recursividade). Dado um inteiro positivo n, imprima o n-ésimo termo da série de
  //     Tetranacci. Saiba que os quatro primeiros termos desta série são 1, 1, 2 e 4; e os demais são
  //     gerados a partir da soma dos anteriores: 1 1 2 4 8 15 29 56...

  public tetranacci(n: number): number {
    if (n === 0 || n === 1 || n === 2) return 0;
    if (n === 3 ) return 1;
    return this.tetranacci(n - 1) + this.tetranacci(n - 2) + this.tetranacci(n - 3) + this.tetranacci( n - 4) 
 }

  // PRIMEIRA OCORRÊNCIA – Dado um inteiro e uma matriz unidimensional de 20 inteiros (convenção
  //     para os próximos exercícios), não ordenados, retorne a posição da primeira ocorrência do inteiro na
  //     matriz. Caso não haja ocorrência, retorne -1.

  public firstOcorrency() {}
  //         PRIMEIRA OCORRÊNCIA ORDENADO – Idem ao anterior, mas suponha que a matriz
  // unidimensional esteja ordenada. Preze pela eficiência.

  public firstOcorrencyOrdered() {}

  // MAIOR ELEMENTO – Considere a mesma matriz unidimensional, não ordenada. Retorne
  // recursivamente o maior elemento

  public biggerElement() {}

  // SOMA DOS ELEMENTOS – Considere a mesma matriz unidimensional, não ordenada. Retorne
  // recursivamente soma dos elementos.

  public sumElements() {}
  // NÚMERO DE OCORRÊNCIAS – Considere a mesma matriz unidimensional, não ordenada. Dado um
  // inteiro, retorne recursivamente quantas ocorrências deste há na matriz.

  public numbersOcorrencys() {}

  // ESTÁ ORDENADO – Considere a mesma matriz unidimensional, não ordenada. Retorne se a matriz
  // unidimensional está em ordem crescente. Verifique recursivamente.

  public isOrdered() {}
}
