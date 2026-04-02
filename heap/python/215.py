# 215. Kth Largest Element in an Array
"""
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
"""
import heapq
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        heap = nums[:k]
        heapq.heapify(heap)
        for num in nums[k:]:
            if num > heap[0]:
                heapq.heappop(heap)
                heapq.heappush(heap, num)
        return heap[0]

print(Solution().findKthLargest([3,2,1,5,6,4], 2))
print(Solution().findKthLargest([3,2,3,1,2,4,5,5,6], 4))
print(Solution().findKthLargest([1], 1))
print(Solution().findKthLargest([1,2], 2))
print(Solution().findKthLargest([1,2,3], 3))
print(Solution().findKthLargest([1,2,3,4], 4))
print(Solution().findKthLargest([1,2,3,4,5], 5))
print(Solution().findKthLargest([1,2,3,4,5,6], 6))