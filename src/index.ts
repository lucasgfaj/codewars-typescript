import Recursivity from "./exercises/Recursivity";

const recursion = new Recursivity();

console.log(recursion.message(4));
console.log("-");
console.log(recursion.countRegress(3))
console.log("-");
console.log(recursion.countPoints(1, 5));
console.log("-");
console.log(recursion.sumInterval(1, 5));
console.log("-");
console.log(recursion.sumIntervaEnhancement(5, 1));
console.log("-");
console.log(recursion.factorial(4));
console.log("-");
console.log(recursion.isPotence(2, 2));
console.log("-");
console.log(recursion.fibonacci(4));
console.log("-");
console.log(recursion.tribonacci(4));
console.log("-");
console.log(recursion.tetranacci(4));
console.log("-");
const matriz = [13, 2, 17, 3, 8, 7, 12, 0, 6, 4, 11, 2, 15, 2, 18, 16, 9, 14, 19, 10];
console.log(recursion.firstOcorrency(3, matriz)) 
const matrizOrdered = [1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 12, 14, 16, 15, 17, 18, 19];
console.log(recursion.firstOcorrencyOrdered(2, matrizOrdered));


