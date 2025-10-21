/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
 

Example 1:


Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
Output: []
*/  

const { TreeNode, arrayToTreeNode } = require('../utils/tree-utils.js');

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return root;

    if (root.val === key) {
        if (!root.left && !root.right) return null;
        if (root.left && !root.right) return root.left;
        if (!root.left && root.right) return root.right;
        if (root.left && root.right) {
            let successor = root.right;
            while (successor.left) {
                successor = successor.left;
            }
            root.val = successor.val;
            root.right = deleteNode(root.right, successor.val);
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }

    return root;
}

// console.log(deleteNode(arrayToTreeNode([5,3,6,2,4,null,7]), 3));
console.log(deleteNode(arrayToTreeNode([8, 4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11,null,null,null,null,null,null,null]), 8));
// console.log(deleteNode(arrayToTreeNode([]), 0));

