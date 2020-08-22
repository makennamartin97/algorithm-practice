//leetcode 203. Remove Linked List Elements
//Remove all elements from a linked list of integers that have value val.
//Example:
//Input:  1->2->6->3->4->5->6, val = 6
//Output: 1->2->3->4->5



function ListNode(val)
{
    this.val = val;
    this.next = null;

}

var removeElements = function(head, val){
    if(head === null){
        return null;
    }
    let currentNode = new ListNode(-1);
    currentNode.next = head;
    head = currentNode;

    while(currentNode.next !== null){
        if(currentNode.next.val === val){
            currentNode.next = currentNode.next.next;
        }
        else{
            currentNode = currentNode.next;
        }
    }
    return head.next;
}
console.log(removeElements([1,2,6,3,4,5,6], 6));