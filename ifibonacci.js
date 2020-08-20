function fiboRec(n){
    if(n <= 1){
        return n;
    }else{
        return fiboRec(n-2) + fiboRec(n-1);
    }
}
//console.log(fiboRec(2));
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