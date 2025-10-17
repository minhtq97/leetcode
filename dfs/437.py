# https://leetcode.com/problems/path-sum-iii/
# Example:
# Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
# Output: 3
# Explanation: The paths that sum to 8 are shown.

from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        """Solution class for Path Sum III problem."""
        count = 0

        def helper(node, path_sums) -> None:
            nonlocal count
            if not node:
                return

            # Add current node value to all existing path sums
            new_sums = [node.val]
            for s in path_sums:
                new_sums.append(s + node.val)

            # Check if any path sum equals target
            for s in new_sums:
                if s == targetSum:
                    count += 1

            # Continue with left and right children
            helper(node.left, new_sums)
            helper(node.right, new_sums)

        helper(root, [])
        return count


class OptimizedSolution:
    """Optimized solution using prefix sum with hash map - O(n) time, O(h) space."""

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        """Find number of paths that sum to targetSum using prefix sum approach."""
        from collections import defaultdict

        def dfs(node, curr_sum):
            nonlocal count
            if not node:
                return

            curr_sum += node.val

            # Check if we found a path ending at current node
            if curr_sum == targetSum:
                count += 1

            # Check if we found a path by removing some prefix
            count += prefix_sums[curr_sum - targetSum]

            # Add current sum to prefix_sums
            prefix_sums[curr_sum] += 1

            # Recurse on children
            dfs(node.left, curr_sum)
            dfs(node.right, curr_sum)

            # Backtrack: remove current sum from prefix_sums
            prefix_sums[curr_sum] -= 1

        count = 0
        prefix_sums = defaultdict(int)
        dfs(root, 0)
        return count


# Helper function to build tree from array
def build_tree_from_array(arr):
    """Build a binary tree from array representation."""
    if not arr:
        return None

    root = TreeNode(arr[0])
    queue = [root]
    i = 1

    while queue and i < len(arr):
        node = queue.pop(0)

        # Left child
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1

        # Right child
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1

    return root


# Test the solution
if __name__ == "__main__":
    # Original test case
    print("Test case 1:")
    tree1 = TreeNode(
        10,
        TreeNode(
            5,
            TreeNode(3, TreeNode(3), TreeNode(-2)),
            TreeNode(2, None, TreeNode(1)),
        ),
        TreeNode(-3, None, TreeNode(11)),
    )
    print(f"Your solution: {Solution().pathSum(tree1, 8)}")
    print(f"Optimized solution: {OptimizedSolution().pathSum(tree1, 8)}")
    
    # New test case
    print("\nTest case 2:")
    arr = [1, 0, 1, 1, 2, 0, -1, 0, 1, -1, 0, -1, 0, 1, 0]
    target = 2
    root = build_tree_from_array(arr)
    print(f"Array: {arr}")
    print(f"Target: {target}")
    print(f"Your solution: {Solution().pathSum(root, target)}")
    print(f"Optimized solution: {OptimizedSolution().pathSum(root, target)}")
    
    # Performance comparison
    print("\n" + "="*50)
    print("SOLUTION COMPARISON:")
    print("="*50)
    print("Your Solution:")
    print("- Time Complexity: O(n²) - for each node, we check all path sums")
    print("- Space Complexity: O(n) - storing path sums for each node")
    print("- Approach: Track all possible path sums from current node")
    print()
    print("Optimized Solution:")
    print("- Time Complexity: O(n) - single pass through the tree")
    print("- Space Complexity: O(h) - height of tree for recursion stack")
    print("- Approach: Prefix sum with hash map for constant time lookups")
    print("- Key Insight: If curr_sum - targetSum exists in prefix_sums, we found a path")
