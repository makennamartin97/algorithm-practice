//check if linked list has a cycle, leetcode
//this is not an optimized solution, i just wanted to see if
//i could get it to pass without using 2 runners/the tortoise and
//hare technique

var hasCycle = function(head) {
    if(head === null){
        return false
    }
    let curr = head
    let visited = []
    while(curr){
        if(curr.next == null){
            return false
        }
        
        if(visited.includes(curr)){
            return true
        }else{
            visited.push(curr)
            curr = curr.next
            
        }
        
    }
    
};