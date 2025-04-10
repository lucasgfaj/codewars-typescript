"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recursivity_1 = __importDefault(require("./exercises/Recursivity"));
const recursion = new Recursivity_1.default();
console.log(recursion.message(4));
console.log("-");
console.log(recursion.countRegress(3));
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
