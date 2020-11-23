function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.size = function() {
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
        var currentNode = head;
  
        while(currentNode.next){
          currentNode = currentNode.next;
        }
  
        currentNode.next = node;
      }
  
      length++;
    };
  
    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
        head = currentNode.next;
      } else {
        while(currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
  
        previousNode.next = currentNode.next;
      }
  
      length --;
    };
  
    // Only change code below this line
    this.indexOf = function(element){
      let index = -1;
      if(!head){
        return -1;
      }
      let curr = head;
      while(curr.next){
        index++;
        if(curr.element === element){
          return index;
        }
        curr = curr.next;
      }
      return -1;
    }
  
    this.elementAt = function(index){
      if(head === null){
        return undefined;
      }
      let currentIndex = 0;
      let curr = head;
      while(currentIndex !== index && curr.next !== null){
        currentIndex++;
        curr = curr.next;
        
      }
      if(currentIndex !== index && curr.next === null){
        return undefined;
      }
      return curr.element;
      
    }
  
    this.isEmpty = function(){
      return this.size() === 0 ? true : false;
    }
  }