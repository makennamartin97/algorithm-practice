//The do/while statement creates a loop that executes a block of code once,
//before checking if the condition is true, then it will repeat the loop as 
//long as the condition is true.
function bubblesort(arr){
    let count = 0;
    do {
        var swapping = false;
        for(var i = 0; i < arr.length - 1 - count; i++){
            if(arr[i] > arr[i+1]){
                swap(arr, i, i+1);
                swapping = true;

            }
        }
        count++;
    } while (swapping === true){
        return arr;
    }
}
function swap(arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}
let arr = [16, 24, 90, 0, 34, 21, 6, 2, 40];
console.log(bubblesort(arr));