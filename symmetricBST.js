// check to see if 2 BST's are symmetrical

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
var isSymmetric = function(root) {

    if(!root){
        return true
    }
    function isMirror(a, b){
        if(!a && !b){
            return true
        }
        if(!a || !b || a.val !== b.val) return false;
        return isMirror(a.left, b.right) && isMirror(a.right, b.left);
    }
    return isMirror(root.left, root.right);
    
};