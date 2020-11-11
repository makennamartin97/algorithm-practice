const arr = [3,3,6,6,6,6,8,8,8,9,9,9,9]


function repeat(arr){
    let count = 0;
    for( var i = 0; i < arr.length; i++){
        count++
        if(arr[i+1]!== arr[i]){
            if(count % 2 != 0){
                return arr[i]
            }else{
                count = 0;
            }
        }
    }
    return -1;
}
//testing
//time complexity: O(n), linear
console.log(repeat(arr))