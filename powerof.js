//find x to the power of y without using the builtin object MATH.POW

//iterative
function iterativepow(x,y){
    let pow = 1
    for(let i = y; i >= 1;i--){
        pow = pow * x
    }
    return pow
}
console.log(iterativepow(3,4)) //81
console.log(iterativepow(1,4)) //1

//recursive
function recursivepow(x,y){
    return y == 0 ? 1 : x * recursivepow(x, y-1)
}
console.log(recursivepow(3,4)) //81
console.log(recursivepow(1,4)) //1