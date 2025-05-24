import { CaxeiroViajante } from "./exercises/Sort/CaxeiroViajante";


const matrizDistancia = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0]
];

const viajante = new CaxeiroViajante(matrizDistancia);
const resultado = viajante.calcularMelhorRota();

console.log("Melhor caminho:", resultado.caminho);
console.log("Menor custo:", resultado.custo);
