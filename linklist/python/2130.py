# https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
# Example:
# Input: head = [5,4,2,1]
# Output: 6
# Explanation:
# The first pair of nodes are (5, 2) and the second pair is (4, 1).
# The maximum sum of a pair is 5 + 2 = 7.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        curr = head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev

    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = head
        fast = head 
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        slow = self.reverseList(slow)
        max_sum = 0
        while slow:
            max_sum = max(max_sum, slow.val + head.val)
            slow = slow.next
            head = head.next
        return max_sum


# Test the solution
if __name__ == "__main__":
    head = ListNode(5, ListNode(4, ListNode(2, ListNode(1))))
    print(Solution().pairSum(head))
