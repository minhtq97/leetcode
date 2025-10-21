/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 * 
 * Example 1:
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 * 
 * Example 2:
 * Input: root = [1,2,2,3,4,5,3]
 * Output: false
 */
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const isMirror = function (n1, n2) {
        if (!n1 && !n2) return true;
        if (!n1 || !n2) return false;

        return n1.val === n2.val && isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
    }

    return isMirror(root.left, root.right);
};

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));
console.log(isSymmetric([1, 2, 2, 3, 4, 5, 3]));