function lastO(arr, m){
    for(var i = arr.length-1; i >= 0; i--){
        if(arr[i] === m){
            console.log("Last occurance is at index: " + i);
            break;
        }
    }
}
let arr = [23, 56, 0, 23, 45, 90, 0]
let m = 23;
console.log(lastO(arr, m))