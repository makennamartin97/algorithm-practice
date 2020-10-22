# doubly linked lists in python

class DLNode:
    def __init__(self, next = None, prev = None, val = None):
        self.val = val
        self.prev = prev
        self.next = next
        

class DLList:
    def __init__(self):
        self.head = None
    
    def insertathead(self, val):
        newnode = DLNode(val)
        if self.head == None:
            self.head = newnode
            return self
        curr = self.head
        
        newnode.next = curr
        curr.prev = newnode
        self.head = newnode
        return self
    
    def insertattail(self, val):
        newnode = DLNode(val)
        if self.head == None:
            self.head = newnode
        runner = self.head
        while runner.next:
            runner = runner.next
        runner.next = newnode
        newnode.prev = runner
        return self

    def insertat(self, val, n):
        newnode = DLNode(val)
        runner = self.head
        i = 0
        while i < n:
            runner = runner.next
            i = i+1
        runner.next = newnode
        newnode.prev = runner
        if runner.next != None:
            newnode.next = runner.next
        else:
            newnode.next = None
        
        return self


    def printlist(self):
        print("printing...")
        runner = self.head
        while runner is not None:
            print(runner.val)
            runner = runner.next
        return self
    


dll1 = DLList()
dll1.insertathead(2).insertathead(6).insertathead(4).insertattail(100).insertattail(9).printlist()
dll1.insertat(0, 4).printlist()
