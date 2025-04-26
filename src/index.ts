import { OrdenationThree, sortCheap } from "./exercises/Ordenation";

const ex1 = new OrdenationThree(1, 5, 3)

console.log(ex1.orderThree());
console.log(ex1.biggerThree());

const cheap1 = new sortCheap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
const cheap2 = new sortCheap([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
const cheap = new sortCheap([4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);