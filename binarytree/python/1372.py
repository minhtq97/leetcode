
# 1372. Longest ZigZag Path in a Binary Tree
# You are given the root of a binary tree.

# A ZigZag path for a binary tree is defined as follow:

# Choose any node in the binary tree and a direction (right or left).
# If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
# Change the direction from right to left or from left to right.
# Repeat the second and third steps until you can't move in the tree.
# Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

# Return the longest ZigZag path contained in that tree.


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import Optional
from collections import deque

def build_tree(nodes):
    if not nodes:
        return None

    root = TreeNode(nodes[0])
    q = deque([root])
    i = 1

    while q and i < len(nodes):
        node = q.popleft()

        if nodes[i] is not None:
            node.left = TreeNode(nodes[i])
            q.append(node.left)
        i += 1

        if i < len(nodes) and nodes[i] is not None:
            node.right = TreeNode(nodes[i])
            q.append(node.right)
        i += 1

    return root

class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        self.ans = 0
        def search(node: Optional[TreeNode], direction: bool, count: int ) -> int:
            if node is None:
                return count
            
            self.ans = max(self.ans, count)

            if direction == 1:
                search(node.right, 0,count + 1)
                search(node.left, 1,1)

            else:
                search(node.left, 1, count + 1)
                search(node.right, 0, 1)
            return count
        
        search(root.left, 0,1)
        search(root.right,1,1)

        return self.ans


tree = build_tree([1,1,1,None,1,None,None,1,1,None,1])
print(Solution().longestZigZag(tree))

        