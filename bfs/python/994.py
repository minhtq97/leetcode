# https://leetcode.com/problems/rotting-oranges/
# Example:
# Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
# Output: 4

from collections import deque
from typing import List


class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        directions = {
            "up": (-1, 0),
            "down": (1, 0),
            "left": (0, -1),
            "right": (0, 1),
        }
        queue = deque()
        fresh = 0
        time = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 2:
                    queue.append((r, c))
                elif grid[r][c] == 1:
                    fresh += 1

        while queue and fresh > 0:
            for _ in range(len(queue)):
                r, c = queue.popleft()
                for dr, dc in directions.values():
                    row, col = r + dr, c + dc
                    if 0 <= row < rows and 0 <= col < cols and grid[row][col] == 1:
                        grid[row][col] = 2
                        fresh -= 1
                        queue.append((row, col))
            time += 1

        return time if fresh == 0 else -1


if __name__ == "__main__":
    # Test case 1
    print("Test case 1:")
    print(Solution().orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))
    
    # Test case 2
    print("\nTest case 2:")
    print(Solution().orangesRotting([[2], [1]]))