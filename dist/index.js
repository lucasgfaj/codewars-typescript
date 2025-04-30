"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sort_1 = require("./exercises/Sort");
// const ex1 = new SortThree(5, 20, 10)
// console.log(ex1.sortThreeMax());
// console.log(ex1.biggerThree());
const cheap1 = new Sort_1.SortCheap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
const cheap2 = new Sort_1.SortCheap([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
const cheap3 = new Sort_1.SortCheap([4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
const ordered = new Sort_1.UnidimensionalArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
const bingo = new Sort_1.Bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
console.log(cheap1.selectionSortImproved());
console.log(cheap2.insertionSort());
console.log(cheap3.bubbleSortImprovise());
console.log(ordered.isGrowing());
console.log(ordered.shuffle());
console.log(ordered.gnomeSort());
console.log(bingo.toString());
