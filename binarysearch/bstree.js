
function Node(val){
    this.value = val;   // the value attribute will be assigned based on user input when a node is instantiated
    this.left = null;   // the left attribute will be assigned to a node later
    this.right = null;  // the right attribute will be assigned to a node later
}
function BST(){
    this.root = null;    // the root attribute will be assigned to a node later

    this.insert = function(val){
        newnode = new Node()
        newnode.value = val
        if(!this.root){
            this.root = newnode
        }
        else{
            this.insertnode(this.root, newnode)
        }

    }
    this.insertnode = function(node, newnode){
        if(newnode.value < node.value){
            if(!node.left){
                node.left = newnode
            }else{
                this.insertnode(node.left, newnode)
            }
        }
        if(newnode.value >= node.value){
            if(!node.right){
                node.right = newnode
            }else{
                this.insertnode(node.right, newnode)
            }
        }
    }

}
var tree1 = new BST();      // make an instance of a BST and store it in a variable
tree1.root = new Node(30);  // assign our instance's root attribute to an instance of a node
                           // but wouldn't it be nicer to be able to call a method that would do this for us?
tree1.insert(12)
tree1.insert(46)
tree1.insert(35)
tree1.insert(2)
console.log(tree1)