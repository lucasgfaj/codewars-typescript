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
const matriz = [2, 3, 5, 7, 9, 2, 4, 6, 8, 0, 10, 12, 14, 16, 18, 11, 13, 15, 17, 19];
console.log(recursion.firstOcorrency(7, matriz))



