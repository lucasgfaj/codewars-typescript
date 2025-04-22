// import Recursivity from "./exercises/Recursivity";

import { RecursivityisAB, RecursivityisN, RecursivityNacci, isRecursivityABS } from "./exercises/isRecursivity";

// const recursion = new Recursivity();

// console.log(recursion.message(4));
// console.log("-");
// console.log(recursion.countRegress(3))
// console.log("-");
// console.log(recursion.countPoints(1, 5));
// console.log("-");
// console.log(recursion.sumInterval(1, 10));
// console.log("-");
// console.log(recursion.sumIntervaEnhancement(5, 1));
// console.log("-");
// console.log(recursion.factorial(4));
// console.log("-");
// console.log(recursion.isPotence(2, 2));
// console.log("-");
// console.log(recursion.fibonacci(4));
// console.log("-");
// console.log(recursion.tribonacci(4));
// console.log("-");
// console.log(recursion.tetranacci(4));
// console.log("-");
// const matriz = [13, 2, 17, 3, 8, 2, 12, 0, 6, 4, 11, 2, 15, 2, 18, 2, 9, 14, 19, 10];
// console.log("-");
// console.log(recursion.firstOcorrency(3, matriz));
// console.log("-");
// const matrizOrdered = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// console.log("-");
// console.log(recursion.firstOcorrencyOrdered(3, matrizOrdered, 0, matrizOrdered.length - 1));
// console.log("-");
// console.log(recursion.biggerElement(matriz));
// console.log("-");
// console.log(recursion.sumElements(matriz));
// console.log("-");
// console.log(recursion.numbersOcorrencys(2, matriz));
// console.log("-");
// console.log(recursion.isOrdered(matriz));
// console.log("-");
// console.log(recursion.sumDigits(99));

const recursion = new RecursivityisN(4);

console.log("-");
console.log("Message:");
console.log(recursion.message());
console.log("regressiveCount:");
console.log(recursion.regressiveCount());
console.log("-");

const recursion1 = new RecursivityisAB(2, 4);

console.log("-");
console.log("countProgress:");
console.log(recursion1.countProgress());
console.log("SumInterval:");
console.log(recursion1.sumInterval());
console.log("SumIntervalImproved:");
console.log(recursion1.sumIntervalImproved());
console.log("-");

const recursion2 = new RecursivityNacci(10);

console.log("-");
console.log("Factorial:");
console.log(recursion2.factorial());
console.log("isPotence:");
console.log(recursion2.potentialAux(2));
console.log("Fibonacci:");
console.log(recursion2.fibonacci());
console.log("Tribonacci:");
console.log(recursion2.tribonacci());
console.log("Tetranacci:");
console.log(recursion2.tetranacci());
console.log("-");

const matriz: number[] = [13, 2, 17, 3, 8, 2, 12, 0, 6, 4, 11, 2, 15, 2, 18, 2, 9, 14, 19, 10];
const matrizOrdered: number[] = [1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

const recursion3 = new isRecursivityABS(4, matrizOrdered);

console.log("-");
console.log("firstOcorrency:");
console.log(recursion3.firstOcorrency());
console.log("firstOcorrencyOrdered:");
console.log(recursion3.firstOcorrencyOrdered());
console.log("biggerElement:");
console.log(recursion3.biggerElement());
console.log("sumElements:");
console.log(recursion3.sumElements());
console.log("numbersOcorrencys:");
console.log(recursion3.numbersOcorrencys());
console.log("isOrdered:");
console.log(recursion3.isOrdered());
console.log("-");
