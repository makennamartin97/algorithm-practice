class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }


}
//const a = new LinkedListNode(5);
//const b = new LinkedListNode(1);
//const c = new LinkedListNode(9);

function reverselinkedlist(headoflist){
    let currentNode = headoflist;
    let previousNode = null;
    let nextNode = null;
    while(currentNode){
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;

}
console.log(reverselinkedlist(headoflist));