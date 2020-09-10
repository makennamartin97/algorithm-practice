//root - top node of tree;
//root branches down to 2 children, those children can also be roots/parents of children below
//subtrees

//heaps- special relations w children but children have no relationship w each other

//1. min-heap - smaller data is higher in tree
//ex- if root is 5,  children MUST be smaller than parent
//think golf, best score is lower number
//80 top, then 100 and 110 children

//2. max-heap - largest data is higher in tree

// Node class 
class Node 
{ 
    constructor(data, left = null, right = null){ 
        this.data = data; 
        this.left = left; 
        this.right = right; 
    } 
}
class BST{
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }else{
            const searchtree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left != null){
                        return searchtree(node.left)
                    }
                }else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right != null){
                        return searchtree(node.right);
                    }
                }else{
                    return null;
                }
            };
            return searchtree(node);
        }
    }
}

