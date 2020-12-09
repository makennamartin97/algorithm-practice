# hackerrank: is this a binary search tree?

# Given the root node of a binary tree, can you determine if it's also a binary search tree?

# Complete the function in your editor below, which has  parameter: a pointer 
# to the root of a binary tree. It must return a boolean denoting whether or not 
# the binary tree is a binary search tree. You may have to write one or more helper functions 
# to complete this challenge.

""" Node is defined as
class node:
  def __init__(self, data):
      self.data = data
      self.left = None
      self.right = None
"""
def ltr(node, arr=[]):
    if node.left:
        ltr(node.left, arr)
    if node:
        arr.append(node.data)
    if node.right:
        ltr(node.right, arr)
    return arr
    
def check_binary_search_tree_(root):
    arr = ltr(root)
    last = arr.pop()
    while( len(arr) > 0):
        temp = arr.pop()
        if temp >= last:
            return False
        last = temp
    return True