"""
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
"""
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class TreeNode:
    def __init__(self, x, left=None, right=None):
        self.val = x
        self.left = left
        self.right = right


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def dfs(root):
            if not root or root == p or root == q:
                return root
            
            left = dfs(root.left)
            right = dfs(root.right)

            if left and right:
                return root
            
            return left or right
        
        return dfs(root)
            




p = TreeNode(5)
q = TreeNode(1)
root = TreeNode(3)
root.left = p
root.right = q
result = Solution().lowestCommonAncestor(root, p, q)
print(result.val)
assert result.val == 3
print("Test passed")

root = TreeNode(3, TreeNode(5), TreeNode(1, TreeNode(6), TreeNode(2, TreeNode(7), TreeNode(4))))
p = root.left
q = root.right
result = Solution().lowestCommonAncestor(root, p, q)
print(result.val)
assert result.val == 3
print("Test passed")
