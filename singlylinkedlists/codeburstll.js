class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.length = 1;
    }
    addToHead(value) {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    }
    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
            
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
            
        return value;
    }
    //remove from anywhere
    remove(val){
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            this.removeFromHead();
            return this;
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
    find(val) {
        let thisNode = this.head;
     
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }
                
            thisNode = thisNode.next;
        }
         
        return thisNode;
    }
}
const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');

console.log(list)