import { TreeNode, arrayToTreeNode } from './utils/tree-utils.js';

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    let isLeftToRight = true;
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            if (isLeftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);        
        isLeftToRight = !isLeftToRight;
    }
    
    return result;
};

// Alternative implementation using DFS
var zigzagLevelOrderDFS = function(root) {
    if (!root) return [];
    
    const result = [];
    
    const dfs = (node, level) => {
        if (!node) return;
        
        if (result.length <= level) {
            result.push([]);
        }
        
        if (level % 2 === 0) {
            result[level].push(node.val); 
        } else {
            result[level].unshift(node.val);
        }
        
        // Process children
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };
    
    dfs(root, 0);
    return result;
};

const inputArray = [1,2,3,4,null,null,5];
const treeRoot = arrayToTreeNode(inputArray);
console.log(zigzagLevelOrder(treeRoot)); // BFS implementation
console.log(zigzagLevelOrderDFS(treeRoot)); // DFS implementation