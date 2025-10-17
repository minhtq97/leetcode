# https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return None
        slow = head
        fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        slow.next = slow.next.next
        return head


# Test the solution
def print_list(head):
    """Print linked list values."""
    values = []
    curr = head
    while curr:
        values.append(curr.val)
        curr = curr.next
    print(values)


if __name__ == "__main__":
    head = ListNode(
        1, ListNode(3, ListNode(4, ListNode(7, ListNode(1, ListNode(2, ListNode(6))))))
    )
    print(Solution().deleteMiddle(head))
