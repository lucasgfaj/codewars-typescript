// Link for this resolution: https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7
function squaresNeeded(
    totalGrains: number, // vai ser o total
    squareIndex: number = 0, // vai ser o contador das casas
    totalAccumulated: number = 0, //será o total de espaço das casas 
    grainsOnCurrentSquare: number = 1 //são a capacidade de cada casa do tabuleiro
    ): number {

    if (totalGrains <= 0) return 0; // return nenhuma casa

    if (totalAccumulated >= totalGrains) return squareIndex; // testa se o numero de casas supera o total de grão

    return squaresNeeded(
        totalGrains, squareIndex + 1,  // adiciona mais 1 para casas
        totalAccumulated + grainsOnCurrentSquare,  // soma o total acumulado com os grãos da quase que ja passou
        grainsOnCurrentSquare * 2); // multiplica para o quadrado 2, 4, 8, e assim vai
}
