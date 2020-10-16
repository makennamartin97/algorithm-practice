// leetcode reverse ll
// Reverse a singly linked list.
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head
    let prev = null
    let nxt = null
    while(curr){
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    }
    return prev
  
};