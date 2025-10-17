# 374. Guess Number Higher or Lower
# You call a pre-defined API int guess(int num), which returns three possible results:

# -1: Your guess is higher than the number I picked (i.e. num > pick).
# 1: Your guess is lower than the number I picked (i.e. num < pick).
# 0: your guess is equal to the number I picked (i.e. num == pick).
# Return the number that I picked.

 

# Example 1:

# Input: n = 10, pick = 6
# Output: 6
# Example 2:

# Input: n = 1, pick = 1
# Output: 1
# Example 3:

# Input: n = 2, pick = 1
# Output: 1


class Solution: 
    def __init__(self, picked: int):
        self.picked = picked

    def guess(self, numb: int) -> bool:
        if numb == self.picked:
            return 0
        elif numb > self.picked:
            return -1
        else:
            return 1
    
    def guessNumber(self, number: int) -> int:
        left, right = 1, number
        while left < right:
            mid = (left + right) // 2
            result = self.guess(mid)
            if result == 0:
                return mid
            elif result ==  -1:
                right = mid -1
            else:
                left = mid + 1

##
solution = Solution(picked = 6)
print(solution.guessNumber(10))