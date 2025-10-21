import { TreeNode, arrayToTreeNode } from './utils/tree-utils.js';

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
 * @return {number}
 */
var minDepth = function (root) {
    if(!root) return 0;
    let queue = [root];
    let depth = 1;
    while(queue.length > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(!node.left && !node.right) return depth;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);  
        }
        depth++;
    }
    return depth;
};

const inputArray = [2, null, 3, null, 4, null, 5, null, 6];
const treeRoot = arrayToTreeNode(inputArray);
console.log(minDepth(treeRoot));