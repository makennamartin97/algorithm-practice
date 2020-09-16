
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SSL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    insert(val) {
        const newnode = new Node(val);
        
        if (!this.head) {
            this.head = newnode;
            this.tail = this.head;
        }else{
            this.tail.next = newnode;
            this.tail = newnode;

        }
        this.length++;
        return this;

    }
    reverse(val){
        var node = this.head;
        this.head = this.tail;
        var next;
        var prev;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    otherreverse(){
        var prev = null;
        var current = this.head;
        while(current != null){
            var next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }

}


var list = new SSL();
list.insert(0);                                                                                                                                                                    
list.insert(2);
list.insert(3);
list.insert(4);
list.otherreverse();
