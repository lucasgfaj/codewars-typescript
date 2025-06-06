"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
const BinaryTree_1 = require("./Tree/BinaryTree");
function assertEqual(actual, expected, message) {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error(`❌ ${message}. Expected: ${JSON.stringify(expected)}, but got: ${JSON.stringify(actual)}`);
    }
    else {
        console.log(`✅ ${message}`);
    }
}
const tree = new BinaryTree_1.BinaryTree();
console.log("Test: should insert nodes correctly");
tree.insert("m");
tree.insert("f");
tree.insert("t");
tree.insert("h");
assertEqual(tree.root.value, "m", "Root should be 'm'");
assertEqual(tree.root.left.value, "f", "Left child of root should be 'f'");
assertEqual(tree.root.left.right.value, "h", "Right child of left node should be 'h'");
assertEqual(tree.root.right.value, "t", "Right child of root should be 't'");
// Reset tree for new tests
const tree2 = new BinaryTree_1.BinaryTree();
tree2.insert("m");
tree2.insert("f");
tree2.insert("t");
console.log("\nTest: should find nodes correctly");
assertEqual((_a = tree2.find("m")) === null || _a === void 0 ? void 0 : _a.value, "m", "Should find 'm'");
assertEqual((_b = tree2.find("f")) === null || _b === void 0 ? void 0 : _b.value, "f", "Should find 'f'");
assertEqual((_c = tree2.find("t")) === null || _c === void 0 ? void 0 : _c.value, "t", "Should find 't'");
assertEqual(tree2.find("z"), null, "Should not find 'z'");
console.log("\nTest: should return null for finding in an empty tree");
const emptyTree = new BinaryTree_1.BinaryTree();
assertEqual(emptyTree.find("m"), null, "Should return null when searching in empty tree");
console.log("\nTest: preorderTraversal");
const tree3 = new BinaryTree_1.BinaryTree();
tree3.insert("m");
tree3.insert("f");
tree3.insert("t");
tree3.insert("c");
tree3.insert("g");
tree3.insert("p");
tree3.insert("z");
assertEqual(tree3.preorderTraversal(), ["m", "f", "c", "g", "t", "p", "z"], "Preorder traversal should match");
assertEqual(tree3.preorderTraversal((_d = tree3.root) === null || _d === void 0 ? void 0 : _d.left), ["f", "c", "g"], "Preorder traversal from left subtree");
console.log("\nTest: inorderTraversal");
assertEqual(tree3.inorderTraversal(), ["c", "f", "g", "m", "p", "t", "z"], "Inorder traversal should match");
assertEqual(tree3.inorderTraversal((_e = tree3.root) === null || _e === void 0 ? void 0 : _e.left), ["c", "f", "g"], "Inorder traversal from left subtree");
console.log("\nTest: postorderTraversal");
assertEqual(tree3.postorderTraversal(), ["c", "g", "f", "p", "z", "t", "m"], "Postorder traversal should match");
assertEqual(tree3.postorderTraversal((_f = tree3.root) === null || _f === void 0 ? void 0 : _f.left), ["c", "g", "f"], "Postorder traversal from left subtree");
