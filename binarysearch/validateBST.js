//leet code question- validate binary search tree
//first 3 only PARTIALLY worked

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root === null){
        return true
    }
    let curr = root;
    let current = root;
    while(curr && curr.left){
        if(curr.val < curr.left.val || curr.val > curr.right.val){
            return false
        }

        curr = curr.left;
    }
    
    while(current && current.right){
        if(current.val > current.right.val || current.val < current.left.val){
            return false
        }

        current = current.right;
    }
    return true;
    
    
    
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min, max) {
    if (root == null) {
        return true;
    }
    return (
        (min == null || min <= root.val) &&
        (max == null && min <= root.val) &&
        (max == null || max >= root.val) &&
        (min == null && max >= root.val) &&
        isValidBST(root.Left, min, root.val) &&
        isValidBST(root.Right, root.val, max)
    );
};

var isValidBST = function(root, min, max) {
    if (root === null) {
        return true;
    }
    return (
        (min == null || min <= root.val) &&
        (max == null && min <= root.val) ||
        (max == null || max >= root.val) &&
        (min == null && max >= root.val) ||
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
};

//final answer:
var isValidBST = function(root) {
    if(!root){
        return true;
    }
    function helper(root, min, max){
        if(!root){
            return true;
        }
        if((min !== null && root.val <= min) || (max !== null && root.val >= max)){
            return false;
        }
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    return helper(root, null, null)
};