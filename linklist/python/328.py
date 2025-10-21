# https://leetcode.com/problems/odd-even-linked-list/
# Example:
# Input: head = [1,2,3,4,5]
# Output: [1,3,5,2,4]

from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    """Solution class for Odd Even Linked List problem."""
    def oddEvenList(self, node: Optional[ListNode]) -> Optional[ListNode]:
        if not node or not node.next:
            return node
        odd = node
        even = node.next
        even_head = even
        while even and even.next:
            odd.next = even.next
            odd = odd.next
            even.next = odd.next
            even = even.next
        odd.next = even_head
        return node

# Test the solution
if __name__ == "__main__":
    head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
    print(Solution().oddEvenList(head))
    