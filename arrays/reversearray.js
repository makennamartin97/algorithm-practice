var x = [-3,5,1,3,2,10];
function reversearray(x){
    console.log(x);
    var temp;
    for(var i =0; i < 3; i++){
        temp = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = temp;
    }
    return x;
}
console.log(reversearray(x));