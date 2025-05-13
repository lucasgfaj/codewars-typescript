export default class Josephus {
  private arr: number[];

  constructor(arr: number[]) {
    // Cria uma cópia do array para evitar modificar o original
    this.arr = [...arr];
  }

  public play(): number {
    // Cria um array com os números escolhidos pelas pessoas
    const people = [...this.arr];
    // Seleciona aleatoriamente a posição inicial
    let currentIndex = Math.floor(Math.random() * people.length);
    // Define a contagem inicial como o número da pessoa sorteada
    let currentCount = people[currentIndex];

    // Enquanto houver mais de uma pessoa no círculo, elimina conforme a regra
    while (people.length > 1) {
      // A contagem inicia a partir da pessoa seguinte. Sendo assim, 
      // o índice da pessoa a ser eliminada é dado por:
      // (currentIndex + currentCount) mod (tamanho atual do array)
      const eliminationIndex = (currentIndex + currentCount) % people.length;

      // Obtém o número escolhido pela pessoa eliminada, que será usado na próxima contagem
      const eliminatedNumber = people[eliminationIndex];
      
      // Remove a pessoa eliminada do círculo
      people.splice(eliminationIndex, 1);
      
      // Atualiza a contagem com o número da pessoa eliminada
      currentCount = eliminatedNumber;
      
      // A nova rodada começa a partir da pessoa que estava imediatamente após a eliminada.
      // Como o array encolheu, o índice da próxima pessoa é igual a eliminationIndex,
      // garantindo o comportamento circular.
      currentIndex = eliminationIndex % people.length;
    }

    // Resta apenas uma pessoa – retorna o seu número escolhido
    return people[0];
  }
}
