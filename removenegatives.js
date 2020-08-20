x = [1, -10, 5, 10, -2];
function removenegatives(x){
    for( var i = 0; i < x.length; i++){
        if(x[i] < 0){
            x[i] = 0;

        }

    }
    return x;
}
console.log(removenegatives(x));