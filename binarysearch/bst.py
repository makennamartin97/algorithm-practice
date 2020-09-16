class Node:
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

#recursive solution
def insert(root, key):
    if root is None:
        return Node(key)
    
    if key < root.data:
        root.left = insert(root.left, key)
    
    else:
        root.right = insert(root.right, key)
    
    return root

insert(5, 9)
