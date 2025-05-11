import ArrayRandom from "./exercises/ArrRandom";
import Balancing from "./exercises/Balancing";

const expr1 = new Balancing("{a + [b * (c - d)]}");
console.log(expr1.isBalancing()); // true

const expr2 = new Balancing("{a + [b * (c - d)]");
console.log(expr2.isBalancing()); // false

const randomArr = new ArrayRandom(10);

console.log(randomArr.toString());
console.log(randomArr.cutValue(30));
console.log(randomArr.removeMultiples(6));