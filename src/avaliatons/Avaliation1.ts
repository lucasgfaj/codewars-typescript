// Lucas Gontarz Fajardo, Lucas Eduardo Aurelio
export default class Avaliation1 {
    private n: number;
  
    constructor(n: number) {
      this.n = n;
    }
  
    public primeirosMenores(): number[] {
      // Criamos um array vazio que vai guardar os números primos encontrados
      let arr: number[] = [];
  
      // Se n for maior que 2, adicionamos o número 2 no array
      // (2 é o menor primo e o único número par que é primo)
      if (this.n > 2) {
        arr.push(2);
      }
  
      // Começamos a verificar os números ímpares a partir de 3 até n
      // Pulamos de 2 em 2 porque números pares (exceto o 2) não são primos
      for (let i = 3; i < this.n; i += 2) {
        // Assumimos que o número atual é primo
        let isPrime = true;
  
        // Verificamos se i é divisível por algum dos primos anteriores
        // Só testamos até a raiz quadrada de i, pois é o suficiente
        // j < arr.lenght (testamos para não ultrapassar a lista do array)
        // arr[j] <= Math.sqrt(i) testamos se o j é menor ou igual a raiz de i que é um primo
        for (let j = 0; j < arr.length && arr[j] <= Math.sqrt(i); j++) {
          // Se i for divisível por algum número primo anterior, então não é primo
          if (i % arr[j] === 0) {
            isPrime = false;
            break;
          }
        }
  
        // Se depois da verificação o número ainda for considerado primo, adicionamos no array
        if (isPrime) {
          arr.push(i);
        }
      }
  
      // Retornamos todos os primos menores que n
      return arr;
    }
  }
  