x =  [1,3,5,7,20];
[ 1, 3, 5, 7, 20 ]
function findavg(x){
var sum = 0;
    for(var i = 0; i < x.length; i++){
        sum = sum + x[i];
    }
    console.log("Sum:" + sum);
    var avg = sum / x.length;
    return avg;
}

console.log(findavg(x));

findavg([9, 23, 5, 12, 4, 2]);
