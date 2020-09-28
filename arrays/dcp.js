//Given a list of numbers and a number k, return whether any two numbers 
//from the list add up to k.

//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 
//is 17.

function dcp(arr, k){
    for(var i = 0; i <= arr.length; i++){
        for(var j = 1; j <= arr.length-1; j++){
            if(arr[i] + arr[j] === k){
                return true;
            }
        }
    }
    return false
}
console.log(dcp([2, 6, 9, 4], 11));