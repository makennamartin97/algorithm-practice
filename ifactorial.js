function ifIterative(n){
    var m = 1;
    for(var i = 1; i <= n; i++){
        m *= i;
     
    }
    return m;
}
//console.log(ifIterative(4));

function ifRecursive(n){

    if(n <= 2){
        return n;
    }else{
        return n * ifRecursive(n-1);

    }
    
}
console.log(ifRecursive(5));