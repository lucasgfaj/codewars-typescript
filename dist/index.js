"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArrRandom_1 = __importDefault(require("./exercises/ArrRandom"));
const Balancing_1 = __importDefault(require("./exercises/Balancing"));
const expr1 = new Balancing_1.default("{a + [b * (c - d)]}");
console.log(expr1.isBalancing()); // true
const expr2 = new Balancing_1.default("{a + [b * (c - d)]");
console.log(expr2.isBalancing()); // false
const randomArr = new ArrRandom_1.default(10);
console.log(randomArr.toString());
console.log(randomArr.cutValue(30));
console.log(randomArr.removeMultiples(6));
