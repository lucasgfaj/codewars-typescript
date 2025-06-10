"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreeBinary_1 = require("./Tree/TreeBinary");
const tree = new TreeBinary_1.TreeBinary();
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
console.log("Find");
const notFound = tree.find(100); // Should return null
console.log(notFound); // Expected output: null
console.log("Preorder");
console.log(tree.preorderTraversal());
console.log("Inorder");
console.log(tree.inorderTraversal());
console.log("Postorder");
console.log(tree.postorderTraversal());
console.log("BFS");
console.log(tree.bfs(22));
console.log("DFS");
console.log(tree.dfs(213));
console.log(tree.printTree());
