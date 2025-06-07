"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TreeNode_1 = require("./Tree/TreeNode");
const bst = new TreeNode_1.BinarySearchTree();
[50, 126, 28, 77, 12, 429, 39, 84, 256, 31].forEach(num => bst.insert(num));
console.log("Em ordem crescente:", bst.inOrderTraversal()); // [12, 28, 31, 39, 50, 77, 84, 126, 256, 429]
console.log("Menor elemento:", bst.findMin()); // 12
console.log("Maior elemento:", bst.findMax()); // 429
