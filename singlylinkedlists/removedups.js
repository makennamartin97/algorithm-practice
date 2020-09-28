//leetcode approach 1: straight forward approach

//This is a simple problem that merely tests your 
//ability to manipulate list node pointers. Because 
//the input list is sorted, we can determine if a node 
//is a duplicate by comparing its value to the node after 
//it in the list. If it is a duplicate, we change the next 
//pointer of the current node so that it skips the next 
// node and points directly to the one after the next node.

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
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next){
        if(curr.val === curr.next.val){
            curr.next = curr.next.next;
        }else{
            curr = curr.next;
        }
    }
    return head;
};