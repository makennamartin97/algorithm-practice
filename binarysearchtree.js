// Node class 
class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}

// Binary Search tree class 
class BinarySearchTree 
{ 
    constructor() 
    { 
        // root of a binary seach tree 
        this.root = null; 
    } 
  
    // function to be implemented 
    insert(data){
            // Creating a node and initailising  
        // with data  
        var newNode = new Node(data); 
                            
        // root is null then node will 
        // be added to the tree and made root. 
        if(this.root === null) 
            this.root = newNode; 
        else

            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode); 
    } 
  
// Method to insert a node in a tree 
// it moves over the tree to find the location 
// to insert a node with a given data  
    insertNode(node, newNode) 
    { 
        // if the data is less than the node 
        // data move left of the tree  
        if(newNode.data < node.data) 
        { 
            // if left is null insert node here 
            if(node.left === null) 
                node.left = newNode; 
            else{
                // if left is not null recur until  
                // null is found 
                this.insertNode(node.left, newNode); 
            }
    
             
        } 
    
        // if the data is more than the node 
        // data move right of the tree  
        else
        { 
            // if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else{
                // if right is not null recur until  
                // null is found 
                this.insertNode(node.right,newNode); 
            }
    
                
        } 


    }
    // remove(data) 
                  
  
    // Helper function 
    // findMinNode() 
    // getRootNode() 
    // inorder(node) 
    // preorder(node)                
    // postorder(node) 
    // search(node, data) 
    findMin(){
        
        if(this.root === null){
            return null
        }
        let curr = this.root;
        if(!curr.left){
            console.log("The root is the minimum node")
            return curr.data;
        }
        while(curr.left){
            curr = curr.left;
       
        }
        return curr.data;
    
    }
    findMax(){
        if(this.root === null){
            return null
        }
        let curr = this.root;
        if(!curr.right){
            console.log("The root is the maximum node")
            return curr.data;
        }
        while(curr.right){
            curr = curr.right;
        }
        return curr.data;
    }
}
let newtree = new BinarySearchTree();
newtree.insert(13);
newtree.insert(6)
newtree.insert(2)
newtree.insert(16)
newtree.insert(18)
newtree.insert(7)
newtree.insert(4)
console.log(newtree.findMin());
console.log(newtree.findMax())
//console.log(newtree)


//console.log(newtree);
