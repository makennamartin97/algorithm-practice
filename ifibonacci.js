
//recursion
//runtime complexity - exponential - O(2^n)
//memory complexity = linear - O(n)
function fiboRec(n){
    if(n <= 1){
        return n;
    }
    return fiboRec(n-2) + fiboRec(n-1);
    
}
//iteration
//runtime complexity - linear - O(n)O(n).
//memory complexity - constant - O(1)O(1).
function fiboIter(n){
    var fibs = [0,1];
    for(var i = 0; i < n; i++){
        fibs.push(fibs[0]+fibs[1]);
        fibs.shift();
    }
    return fibs[0];
}
console.log("Fibonacci Iteration:", fiboIter(3));
console.log("Fibonacci Recursion:", fiboRec(3));