var x = [1,3, 5, 7];
var y = 3;
function findcount(x, y){
    var count = 0;
    for(var i = 0; i < x.length; i++){
        if(x[i] > y){
            count++;
        }
    }
    return count;
}
console.log(findcount([5, 7, 82, 0, 12, 4], 0));