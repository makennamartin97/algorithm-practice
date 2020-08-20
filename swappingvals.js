x = [2, 3, 5, 7, 6];
function swappingvals(x){
    console.log("Original array:", x);
    var temp = x[0];
    x[0] = x[x.length-1];
    x[x.length-1] = temp;
    return x;
}
console.log("Result:", swappingvals([23, 45, 89, 2, 12, 8, 100]));