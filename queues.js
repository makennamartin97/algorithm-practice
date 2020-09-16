//queues - FIFO - first in first out
//the one put into the queue first is the first to be removed
class Queue {
   
    constructor(){
      
      this.data = []; //the list we store the elements
      this.tail = 0; //is used to store the position in which the next element will be stored
      this.size = 10; //maximum # of elements a queue can have
    }
    //inserting element at the end of the queue
    //After inserting an element to the queue, we need to increase 
    //the rear value by 1 so the rear points to the next position 
    //where the new element will be inserted.
    enqueue(element){
        if(this.tail < this.size){
            this.data[this.tail] = element;
            this.tail++;
        }
    }
    length(){
        console.log("Queue length: " + this.tail);
        return this.tail;
    }
    isEmpty(){
        return this.tail === 0;
        
    }
    getFront(){
        if(this.isEmpty() === false){
            console.log("First element: " + this.data[0])
            return this.data[0];
        }
    }
    getLast(){
        if(this.isEmpty() === false){
            console.log("Last element: "+ this.data[this.tail-1])
            return this.data[this.tail-1];
        }
    }
    //deleting the first element to be added
    dequeue(){
        if(this.isEmpty() === false){
            this.tail--;
            return this.data.shift();
        }

    }
    print(){
        console.log("Printing queue...")
        for(let i = 0; i < this.tail; i++){
            console.log(this.data[i]);
        }
    }
    //Delete all elements of the queue and set the tail to 0.
    reset(){
        this.data.length = 0;
        this.tail = 0;
    }
 }
 let queue1 = new Queue();
 let queue2 = new Queue();
 queue1.enqueue(6);
 queue1.enqueue(2);
 queue1.enqueue(8);
 queue1.enqueue(9);
 queue1.length();
 console.log(queue2.isEmpty());
 console.log(queue1.isEmpty())
 queue1.getFront();
 queue1.getLast();
 queue1.dequeue();
 //console.log(queue1)
 queue1.length();
 queue1.print();
 queue1.reset();
 queue1.print();