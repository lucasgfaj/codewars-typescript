import { SortThree, SortCheap } from "./exercises/Sort";

const ex1 = new SortThree(1, 5, 3)

console.log(ex1.orderThree());
console.log(ex1.biggerThree());

const cheap1 = new SortCheap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
const cheap2 = new SortCheap([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
const cheap3 = new SortCheap([4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
const ordered = new SortCheap([4, 5, 6, 1, 2, 3, 7, 8, 9, 10, 4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);

console.log(cheap1.selectionSort());
console.log(cheap2.bubbleSort());
console.log(cheap3.insertionSort());
console.log(ordered.isOrdered());
console.log(cheap1.bubbleSortUpdate());