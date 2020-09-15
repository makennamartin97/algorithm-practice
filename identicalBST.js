//check to see if 2 binary search trees are identical

// Node class 
class BinaryTreeNode 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}
function areIdentical(root1, root2){
    if(!root1 && !root2){
        return true
    }
    if(root1 && root2){
        return(root1.data === root2.data &&
            areIdentical(root1.left, root2.left) &&
            areIdentical(root1.right, root2.right))
    }

    return false;
};


if (areIdentical(root1, root2)) {
    console.log(root1, root2);
    console.log("The trees are identical");
  } else {
    console.log(root1, root2);
    console.log("The trees are not identical");
  }
