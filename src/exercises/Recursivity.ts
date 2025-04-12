export default class Recursivity {
  constructor() {}

  public message(n: number): string {
    if (n > 0) return "Eu uso Recursividade\n" + this.message(n - 1);
    return "";
  }

  public countRegress(n: number): string {
    if (n > 0) return `${n} \n` + this.countRegress(n - 1);
    return "Fire!";
  }

  public countPoints(a: number, b: number): string {
    if (a > b) {
      return "\nFim";
    }

    return `${a}\n` + this.countPoints(a + 1, b);
  }

  public sumInterval(a: number, b: number): number {
    if (a > b) return 0;

    return a + this.sumInterval(a + 1, b);
  }

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

  public factorial(n: number): number {
    if (n === 0 || n === 1) return 1;

    return n * this.factorial(n - 1);
    // fatorial é tipo !4 = 1 * 2 * 3 * 4 que da 24
    // mas a soma é 1 + 2 + 3 + 4 que da 10
  }

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

  public fibonacci(n: number): number{
    if (n === 1 || n === 2) return 1; // Primeiro termo é 1
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  public tribonacci(n: number): number {
    if (n === 0) return 0; // O primeirot termo é 0
    if (n === 1 || n === 2) return 1;  // O segundo termo é 1
    if (n === 3) return 2; // O terceiro termo é 2
    return this.tribonacci(n - 1) + this.tribonacci(n - 2) + this.tribonacci(n - 3);
  }

  public tetranacci(n: number): number {
    if (n === 0) return 1;    // O primeiro termo é 1
    if (n === 1) return 1;    // O segundo termo é 1
    if (n === 2) return 2;    // O terceiro termo é 2
    if (n === 3) return 4;    // O quarto termo é 4
    return this.tetranacci(n - 1) + this.tetranacci(n - 2) + this.tetranacci(n - 3) + this.tetranacci(n - 4); 
  }
  

  // PRIMEIRA OCORRÊNCIA – Dado um inteiro e uma matriz unidimensional de 20 inteiros (convenção
  //     para os próximos exercícios), não ordenados, retorne a posição da primeira ocorrência do inteiro na
  //     matriz. Caso não haja ocorrência, retorne -1.

  public firstOcorrency(n: number, matriz: number[], index: number = 0): number {
    if(index >= matriz.length) return -1; 
  
    if(matriz[index] === n) return index;
  
    return this.firstOcorrency(n, matriz, index + 1);    
  }
  //         PRIMEIRA OCORRÊNCIA ORDENADO – Idem ao anterior, mas suponha que a matriz
  // unidimensional esteja ordenada. Preze pela eficiência.

  public firstOcorrencyOrdered(n: number, matriz: number[], index: number = 0): number {
    if(index >= matriz.length) return -1;

    if(matriz[index] === n){
      if(index === 0 || matriz[index - 1] !== n){
        return index;
      } else {
        return this.firstOcorrencyOrdered(n, matriz, index + 1);
      }
    } 

    return this.firstOcorrencyOrdered(n, matriz, index + 1);
  }

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
