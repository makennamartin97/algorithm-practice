// doubly linked list
class Node {
    constructor(value, prev, next){
        this.value = value
        this.prev = prev || null
        this.next = next || null
    }
}

class LinkedList {
    constructor(){
        this.head = this.tail = null;
    }
    //add to end of list / tail
    append(value){
        if(!this.tail){
            this.head = this.tail = new Node(value);
        } else{
            let oldtail = this.tail
            this.tail = new Node(value);
            oldtail.next = this.tail;
            this.tail.prev = oldtail;
        }

    }
    //add to head of list
    prepend(value){
        if(!this.head){
            this.head = this.tail = new Node(value)
        } else{
            let oldhead = this.head;
            this.head = new Node(value)
            oldhead.prev = this.head;
            this.head.next = oldhead;
            
        }
    }
    //delete head
    deletehead(){
        if(!this.head){
            return null
        } else {
            let del = this.head;
            //if one node left
            if(this.head === this.tail){
                this.head = this.tail = null;
            }else{
                this.head = this.head.next;
                this.head.prev = null
                
            
            }
            return del.value;
        }
    }
    //delete tail
    deletetail(){
        if(!this.tail){
            return null;
        } else {
            let del = this.tail;
            //if one node left
            if(this.head === this.tail){
                this.head = this.tail = null
            } else{
                this.tail = this.tail.prev
                this.tail.next = null
            }
            return del.value;
        }
    }
    search(value){
            
        let curr = this.head;
        while(curr){
            if(curr.value === value){
                return curr
            }
            curr = curr.next;
        }
        return null;

    }
    
}

let list = new LinkedList();
list.append(1)
list.append(2)
list.append(3)

list.prepend(0)

//list.deletehead()
//list.deletetail()
console.log(list.search(1))
//console.log(list)




