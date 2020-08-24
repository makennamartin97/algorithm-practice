class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// create the first node
const head = new LinkedListNode(12);

// add a second node
head.next = new LinkedListNode(99);

// add a third node
head.next.next = new LinkedListNode(37);

function print(head){
    let current = head;

    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return head;

}
//console.log(print(head));

//The LinkedList class represents a linked list and will contain methods for 
//interacting with the data it contains. 
//The only property is a symbol property called head that will contain a pointer 
//to the first node in the list. A symbol property is used instead of a string
// property to make it clear that this
const head = Symbol("head");

class LinkedList {
    constructor() {
        this[head] = null;
    }
    //The add() method accepts a single argument, any piece of data, and adds it to 
    //the end of the list. 
    add(data){
        const newNode = new LinkedListNode(data);

        if(this[head] === null){
            this[head] = newNode;
        }else{
            let current = this[head];

            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

