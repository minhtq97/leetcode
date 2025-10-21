/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let leftArray = [];
    let rightArray = [];
    function helper(root, arr){
        if(!root?.left && !root?.right) arr.push(root);

        if(root.left) helper(root.left,arr);
        if(root.right) helper(root.right,arr); 
    }

    helper(root1, leftArray);
    helper(root2, rightArray);

    return JSON.stringify(leftArray) === JSON.stringify(rightArray);
};

console.log(leafSimilar([3,5,1,6,2,9,8,null,null,7,4],[3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]));