import { Exame } from "./exercises/Exame";
import { SortThree, SortCheap, UnidimensionalArray, Bingo, SearchBinary, Sudoku,  } from "./exercises/Sort";

// const ex1 = new SortThree(5, 20, 10)

// console.log(ex1.sortThreeMax());
// console.log(ex1.biggerThree());

 const cheap1 = new SortCheap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
const cheap2 = new SortCheap([10, 1, 9, 2, 8, 3, 7, 4, 6, 5]);
const cheap3 = new SortCheap([4, 5, 6, 1, 2, 3, 7, 8, 9, 10]);
const ordered = new UnidimensionalArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
const bingo = new Bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
console.log(cheap1.selectionSortImproved());
console.log(cheap2.insertionSort());
console.log(cheap3.bubbleSortImprovise());
console.log(ordered.isGrowing());
console.log(ordered.shuffle());
console.log(ordered.gnomeSort());

console.log(bingo.toString());
console.log(ordered.extremeNext(3));
const binary = new SearchBinary([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);

console.log(binary.searchBinary(18));

const mSudoku = new Sudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]);

console.log(mSudoku.sudokuGame());


console.log(binary.findUniqWithFor([ 0, 0, 0.55, 0, 0 ]));
console.log(binary.findUniqWithWhile([ 1, 1, 1, 2, 1, 1 ]))

const numeros = [5, 2, 9, 1, 5, 6];
const exame = new Exame(numeros);

console.log("Array original:", exame.getArr());
console.log("Selection Sort:", exame.selectionSort());
console.log("Insertion Sort:", exame.insertionSort());
console.log("Bubble Sort:", exame.bubbleSort());

console.log("Busca Sequencial (procurando 9):", exame.sequencySearch(9));
console.log("Busca Sequencial (procurando 100):", exame.sequencySearch(100));

console.log("Busca Binária (procurando 5):", exame.binarySearch(5));
console.log("Busca Binária (procurando 0):", exame.binarySearch(0));