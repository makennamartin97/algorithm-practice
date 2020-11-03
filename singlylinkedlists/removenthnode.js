//leetcode remove nth node from end of linked list
//Given the head of a linked list, remove the nth node from the end of the 
//list and return its head.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 
var removeNthFromEnd = function(head, n) {
    let curr = head
    let length = 0
    while(curr.next){
        curr = curr.next
        length++
    }
    let remove = length - n
    let curr2 = head
    let i = 0
    while(curr2 && i <= remove){
        if(i === remove){
            curr2.next = curr2.next.next
        }
        curr2 = curr2.next
        i++
    }
    
    return head

    
};