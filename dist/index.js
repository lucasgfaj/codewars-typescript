"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CaxeiroViajante_1 = require("./exercises/Sort/CaxeiroViajante");
const matrizDistancia = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];
const viajante = new CaxeiroViajante_1.CaxeiroViajante(matrizDistancia);
const resultado = viajante.calcularMelhorRota();
console.log("Melhor caminho:", resultado.caminho);
console.log("Menor custo:", resultado.custo);
