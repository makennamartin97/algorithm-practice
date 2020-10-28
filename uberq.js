// Given two integers representing the numerator and denominator of a fraction, 
//return the fraction in string format.
//If the fractional part is repeating, enclose the repeating part in 
//parentheses.

function fraction(num, denom){
    let result = num / denom
    let arr = (""+result).split("")
    let count = 0
    let repeat = null
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            count++
            repeat = arr[i]
        }
    }
    if( count > 3){
        result = arr[0] + arr[1] + "(" + repeat + ")"
    }
    return result.toString()
    

}
//testing
console.log(fraction(1,3)) //0.(3)
console.log(fraction(3,1)) //3
console.log(fraction(2,3)) //0.(6)
console.log(fraction(1,2)) //0.5

