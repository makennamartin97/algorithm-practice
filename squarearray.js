x = [1,5, 10, -2];
function squarearray(x){
    for(var i = 0; i < x.length; i++){
        x[i] = x[i] * x[i]
    }
    return x;
}
console.log(squarearray(x));