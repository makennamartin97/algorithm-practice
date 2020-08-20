x = [1,5, 10, 7, -2];
function shiftarray(x){
    for(var i =0; i < x.length-1; i++){
        x[i] = x[i+1];
    }
    x[x.length-1] = 0;
    return x;
}
console.log(shiftarray([ 10, 7, -2, 0, 0 ]));