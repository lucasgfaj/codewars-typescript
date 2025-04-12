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
  



  public firstOcorrency(n: number, matriz: number[], index: number = 0): number {
    if(index >= matriz.length) return -1; 
  
    if(matriz[index] === n) return index;
  
    return this.firstOcorrency(n, matriz, index + 1);    
  }

  public firstOcorrencyOrdered(n: number, matriz: number[],  index: number, last: number): number {
    if(index > last) return -1;
    
    let mid: number = Math.floor((last + index) / 2);

    if(matriz[mid] == n){
      // Encontra o elemento, porem pode haver outros elementos iguais
      const leftSearch = this.firstOcorrencyOrdered(n, matriz, index, mid - 1);
      return (leftSearch != -1) ? leftSearch : mid;

    } else if (matriz[mid] < n){
      // Procura na metade da direita
      return this.firstOcorrencyOrdered(n, matriz, mid + 1, last);
    } else {
      // Procura na metade da esquerda
      return this.firstOcorrencyOrdered(n, matriz, index, mid - 1);
    }
  }

  public biggerElement(matriz: number[], i: number = 0, acc: number = 0): number {
    if(i >= matriz.length) return acc;

    if(matriz[i] > acc) acc = matriz[i];
      
    return this.biggerElement(matriz, i + 1, acc);
  }


  public sumElements(matriz: number[], i: number = 0, sum: number = 0): number {
    if(i >= matriz.length) return sum;

    sum += matriz[i];

    return this.sumElements(matriz, i + 1, sum);
  }


  public numbersOcorrencys(n: number, matriz: number[], i: number = 0, ocorrencys: number = 0): number {
    if(i >= matriz.length) return ocorrencys;

    if(matriz[i] === n){
      ocorrencys ++;
    }

    return this.numbersOcorrencys(n, matriz, i + 1, ocorrencys);
  }
  
  public isOrdered(matriz: number[], i: number = 0): string {
    if(i >= matriz.length - 1) return "Ordered";

    if(matriz[i] > matriz[i + 1]){
      return "Not Ordered";
    }
    return this.isOrdered(matriz, i + 1);
  
  }
}
