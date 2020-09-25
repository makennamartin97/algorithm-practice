//codewars linkedlist length and count
//Implement Length() to count the number of nodes in a linked list.
//Implement Count() to count the occurrences of an integer in a linked list.

function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function length(head) {
    // Your code goes here.
    let l = 0;
    let curr = head;
    while(curr){
      l++;
      curr = curr.next;
    }
    return l;
  }
  
  function count(head, data) {
    // Your code goes here.
    let curr = head;
    let o = 0;
    while(curr){
      if(curr.data === data){
        o++;
      }
      curr = curr.next;
    }
    return o;
    
  }