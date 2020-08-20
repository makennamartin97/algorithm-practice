var x = [-3, 3, 5, 7];

function findmax(x){
    var max = x[0];
    for(var i = 0; i <= x.length; i++){
        if(x[i] > max){
            max = x[i];
        }
    }
return max;
}

console.log(findmax(x));
