class BstNode {
    constructor(data){
        this.data = data; 
        this.left = null; 
        this.right = null; 
    }
};
class BinarySearchTree 
{ 
    constructor() 
    { 
        // root of a binary seach tree 
        this.root = null; 
    } 
}
function findMin(root){
    if(root === null){
        return null
    }
    while(root.left){
        root = root.left;
   
    }
    return root.data;

}