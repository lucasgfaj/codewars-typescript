// import Recursivity from "./exercises/Recursivity";

import { RecursivityNacci } from "./exercises/isRecursivity";

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

const recursion = new RecursivityNacci(10);

console.log(recursion.fibonacci());
console.log(recursion.tribonacci());
console.log(recursion.tetranacci());