# leetcode reverse linked list
# Reverse a singly linked list.


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # check if the ll is empty
        if head == None:
            return None
        else:
            # set variable to curr/head and prev to none
            curr = head
            prev = None
            # while there is a node
            while curr:
                # new var for currs pointer
                nxt = curr.next
                # point curr backwards where theres no node / point to one before instead of ahead
                curr.next = prev
                # move along the list, prev goes to curr, curr goes to nxt
                prev = curr
                curr = nxt
                
            return prev