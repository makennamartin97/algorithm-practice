//stack - LIFO (last one first out)
//only accessible through top of the stack

class Stack {
    constructor(){
        this.data = []; //an array in which we store the value
        this.top = 0; //points to top of index
    }
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    pop(){
        if( this.isEmpty() === false ) {
            this.top = this.top-1;
            return this.data.pop();
        }
    }
    length(){
        console.log("Stack length: " + this.top)
        return this.top;
    }
    print(){
        console.log("Printing stack...")
        var top = this.top - 1; // because top points to index where new element to be inserted
        while(top >= 0){
            console.log(this.data[top]);
            top--;
        }
    }
    isEmpty(){
        console.log(this.top === 0)
        return this.top === 0;
    }
    //print in reverse order
    reverse(){
       this._reverse(this.top-1);
    }
    _reverse(index){
        if(index != 0){
            this._reverse(index-1)
        }
        console.log(this.data[index]);
    }
    //getting top element
    peek(){
        console.log("The top is: " + this.data[this.top-1]);
        return this.data[this.top-1];
    }

}
let newstack = new Stack();
let newstack2 = new Stack();
newstack.push(6)
newstack.push(8)
newstack.push(2)
newstack.push(9)
newstack.push(4)
newstack.pop()
newstack.length();
newstack.print();
newstack2.isEmpty();
newstack.reverse();
newstack.peek();