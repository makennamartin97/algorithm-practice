//recursive
function recursivepow(x,y){
    return y == 0 ? 1 : x * recursivepow(x, y-1)
}
console.log(recursivepow(3,4)) //81
console.log(recursivepow(1,4)) //81