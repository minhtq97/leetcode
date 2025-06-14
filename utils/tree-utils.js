/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Converts an array representation of a binary tree to a TreeNode structure
 * @param {Array} arr - Array representation of the binary tree
 * @return {TreeNode} - Root node of the created binary tree
 */
function arrayToTreeNode(arr) {
    if (!arr || arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();
        
        // Left child
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        // Right child
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
}

/**
 * Converts a TreeNode structure back to an array representation
 * @param {TreeNode} root - Root node of the binary tree
 * @return {Array} - Array representation of the binary tree
 */
function treeNodeToArray(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    
    // Remove trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }
    
    return result;
}

module.exports = {
    TreeNode,
    arrayToTreeNode,
    treeNodeToArray
}; 