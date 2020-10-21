# singly linked listsin python
class SLNode:
    def __init__(self, val):
        self.value = val
        self.next = None

class SList:
    def __init__(self):
        self.head = None


    def add_to_front(self, val):	# added this line, takes a value
        newnode = SLNode(val) # create a new instance of our Node class using the given value
        curr = self.head # save the current head in a variable
        newnode.next = curr
        self.head = newnode
        return self # to allow for chaining
    
    def add_to_back(self, val):	# accepts a value
        newnode = SLNode(val)
        if self.head == None:
            self.add_to_front(val)
            return self

        runner = self.head
        while runner.next:
            runner = runner.next
        runner.next = newnode # increment the runner to the next node in the list
        return self
    
    def print_values(self):
        print("printing...")
        curr = self.head # pointer to heads first node, runner
        while curr != None:
            print(curr.value)
            curr = curr.next
        return self

    def remove_from_front(self):
        if self.head == None:
            return None
        remove = self.head
        self.head = remove.next
        return self
    
    def remove_from_back(self):
        curr = self.head # removal if only one or 2 nodes
        if curr == None or curr.next == None:
            return None
        secondlast = self.head # iterating to the second last node and pointing it to None
        while secondlast.next.next != None:
            secondlast = secondlast.next
        secondlast.next =  None
        return self
    
    def remove_val(self, val):
        if self.head == None:
            return None
        curr = self.head
        prev = None
        while curr.next != None:
            prev = curr
            curr = curr.next
            if curr.value == val:
                prev.next = curr.next
                
        return self
    def insertat(self, val, n):
        curr = self.head
        prev = None
        newnode = SLNode(val)
        numnode = 1
        while numnode < n:
            prev = curr
            curr = curr.next
            numnode+=1
        prev.next = newnode
        newnode.next = curr
        return self


        

# testing
list1 = SList()	# create a new instance of a list
list2 = SList()
list3 = SList()

#list1.add_to_front("are").add_to_front("Linked lists").add_to_back("fun!").remove_from_front().print_values()    # chaining

#list2.add_to_front(2).add_to_front(1).add_to_back(3).remove_from_front().print_values()    # chaining

# list3.add_to_front(2).add_to_back(3).add_to_front(1).print_values()

# list3.remove_val(3).print_values()

list3.add_to_back(8).add_to_back(10).add_to_front(3).add_to_back(12).print_values()
list3.insertat(6,2).print_values()
list3.insertat(1,4).print_values()

