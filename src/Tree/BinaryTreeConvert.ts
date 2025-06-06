import { BinaryTree } from "./BinaryTree";

function assertEqual(actual: any, expected: any, message: string) {
	if (JSON.stringify(actual) !== JSON.stringify(expected)) {
		console.error(`❌ ${message}\n   Expected: ${expected}\n   Actual: ${actual}`);
	} else {
		console.log(`✅ ${message}`);
	}
}

function describe(name: string, fn: () => void) {
	console.log(`\n=== ${name} ===`);
	fn();
}

function test(name: string, fn: () => void) {
	try {
		fn();
		console.log(`✔ ${name}`);
	} catch (error) {
		console.error(`✘ ${name}`);
		console.error(error);
	}
}

describe("BinaryTree", () => {

	test("should insert nodes correctly", () => {
		const tree = new BinaryTree<number>();
		tree.insert(10);
		tree.insert(5);
		tree.insert(15);
		tree.insert(8);

		assertEqual(tree.root!.value, 10, "Root node is 10");
		assertEqual(tree.root!.left!.value, 5, "Left child of root is 5");
		assertEqual(tree.root!.left!.right!.value, 8, "Right child of left node is 8");
		assertEqual(tree.root!.right!.value, 15, "Right child of root is 15");
	});

	test("should find nodes correctly", () => {
		const tree = new BinaryTree<number>();
		tree.insert(10);
		tree.insert(5);
		tree.insert(15);

		assertEqual(tree.find(10)!.value, 10, "Find 10");
		assertEqual(tree.find(5)!.value, 5, "Find 5");
		assertEqual(tree.find(15)!.value, 15, "Find 15");
		assertEqual(tree.find(20), null, "Find 20 (not found)");
	});

	test("should return null for finding in an empty tree", () => {
		const tree = new BinaryTree<number>();
		assertEqual(tree.find(10), null, "Find in empty tree returns null");
	});

	describe("preorderTraversal", () => {

		test("should return an empty array for an empty tree", () => {
			const tree = new BinaryTree<number>();
			assertEqual(tree.preorderTraversal(), [], "Preorder of empty tree");
		});

		test("should return the correct preorder traversal", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			assertEqual(tree.preorderTraversal(), [10, 5, 3, 7, 15, 12, 17], "Correct preorder traversal");
		});

		test("should allow starting from an arbitrary node", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			assertEqual(tree.preorderTraversal(tree.root?.left), [5, 3, 7], "Preorder from left subtree");
		});
	});

	describe("inorderTraversal", () => {

		test("should return an empty array for an empty tree", () => {
			const tree = new BinaryTree<number>();
			assertEqual(tree.inorderTraversal(), [], "Inorder of empty tree");
		});

		test("should return the correct inorder traversal", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			assertEqual(tree.inorderTraversal(), [3, 5, 7, 10, 12, 15, 17], "Correct inorder traversal");
		});

		test("should allow starting from an arbitrary node", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			assertEqual(tree.inorderTraversal(tree.root?.left), [3, 5, 7], "Inorder from left subtree");
		});
	});

	describe("postorderTraversal", () => {

		test("should return an empty array for an empty tree", () => {
			const tree = new BinaryTree<number>();
			assertEqual(tree.postorderTraversal(), [], "Postorder of empty tree");
		});

		test("should return the correct postorder traversal", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			assertEqual(tree.postorderTraversal(), [3, 7, 5, 12, 17, 15, 10], "Correct postorder traversal");
		});

		test("should allow starting from an arbitrary node", () => {
			const tree = new BinaryTree<number>();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(17);

			assertEqual(tree.postorderTraversal(tree.root?.left), [3, 7, 5], "Postorder from left subtree");
		});
	});

});
