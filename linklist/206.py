# https://leetcode.com/problems/reverse-linked-list/
# Example:
# Input: head = [1,2,3,4,5]
# Output: [5,4,3,2,1]
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        """Reverse a linked list."""
        prev = None
        curr = head
        while curr:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        return prev

def print_list(head):
    """Print linked list values."""
    values = []
    curr = head
    while curr:
        values.append(curr.val)
        curr = curr.next
    print(values)

if __name__ == "__main__":
    head = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
    print("Original list:")
    print_list(head)
    
    reversed_head = Solution().reverseList(head)
    print("Reversed list:")
    print_list(reversed_head)
    
    print("Empty list:")
    print_list(Solution().reverseList(None))