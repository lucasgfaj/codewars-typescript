import { TreeBinary } from "./Tree/TreeBinary";

const tree = new TreeBinary();

tree.insert(32);
tree.insert(312);
tree.insert(123);
tree.insert(12);
tree.insert(213);
tree.insert(19);
tree.insert(22);
tree.insert(42);


const result = tree.find(12); // Should return node with value 12
console.log(result); // Expected output: Node with value 12

const notFound = tree.find(100); // Should return null
console.log(notFound); // Expected output: null

console.log(tree.printTree());