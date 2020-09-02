function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}


DoublyLinkedList.prototype.addToHead = function(value){
    //this is going to store in the variable newNode a new Node object
    const newNode = new Node(value, this.head, null); 
    //if there is a head node, its prev value will be the newode
    if (this.head){
        this.head.prev = newNode;
    } 
    //if none, the new node will be the head and tail
    else this.tail = newNode;
    this.head = newNode;
    
}

DoublyLinkedList.prototype.addToTail = function(value){
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;

}
DoublyLinkedList.prototype.removeHead = function() {
    if(!this.head) return null;
    //otherwise, of course save the head value 
    let value = this.head.value;
    //set the new head
    this.head = this.head.next;

    if(this.head) this.head.prev = null;
    else this.tail = null;
    return value;
}
DoublyLinkedList.prototype.removeTail = function(){
    if(!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.prev;

    if(this.tail) this.tail.next = null;
    else this.head = null;
    return value;
}

//creating new list
const list = new DoublyLinkedList();
//creating 3 nodes and adding to the front
list.addToHead(15);
list.addToHead(18);
list.addToHead(21);

//to access the middle node value
console.log(`Middle node value: ${list.head.next.value}`);
//creating new nodes and adding them to the back
list.addToTail(26);
list.addToTail(32);

//remove node from head;
list.removeHead();

//remove node from tail
list.removeTail();

console.log(list);
