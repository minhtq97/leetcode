/**
 * LeetCode 102: Binary Tree Level Order Traversal
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Question: Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 * 
 * 
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 */

// import { TreeNode, arrayToTreeNode } from './utils/tree-utils.js';
const { TreeNode, arrayToTreeNode } = require('./utils/tree-utils');
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let ans = [[root.val]];
    let i = 1;

    var appendNodes = function (ans, n1, n2, i) {
        if (!ans?.[i]) {
            let arr = [n1?.val, n2?.val].filter(n => typeof n === 'number');
            if (arr.length > 0) ans.push(arr);
        }
        else {
            let arr = [n1?.val, n2?.val].filter(n => typeof n === 'number');
            if (arr.length > 0) ans[i].push(...arr);
        }

        if (n1?.left || n1?.right) appendNodes(ans, n1.left, n1.right, i + 1);
        if (n2?.left || n2?.right) appendNodes(ans, n2.left, n2.right, i + 1);
    };

    appendNodes(ans, root.left, root.right, i);

    return ans;
};

// Other solution***
const helper = (root, level, array) => {
    if (!root) return;

    if (!array.at(level)) {
        array.push([]);
    }

    array[level].push(root.val);

    helper(root.left, level + 1, array)
    helper(root.right, level + 1, array)
}

var levelOrder2 = function (root) {
    const array = [];

    helper(root, 0, array)

    return array;
};

// Test with array input
// const inputArray = [3, 9, 20, null, null, 15, 7];
const inputArray = [1, 2, 3, 4, null, null, 5]
const treeRoot = arrayToTreeNode(inputArray);
console.log(levelOrder(treeRoot));
console.log(levelOrder2(treeRoot));