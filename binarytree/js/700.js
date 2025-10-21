const { TreeNode, arrayToTreeNode } = require('../utils/tree-utils.js');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return root;

    if (root.val === val) {
        return root;
    } else if (root.val > val) {
       return searchBST(root.left, val);
    } else {
       return searchBST(root.right, val);
    }
};

console.log(searchBST(arrayToTreeNode([4,2,7,1,3]), 2));
console.log(searchBST(arrayToTreeNode([4,2,7,1,3]), 5));