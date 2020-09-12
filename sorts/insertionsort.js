//insertion sort
//sorted and unsorted sides
function insertionsort(arr){
    for(var i = 1; i < arr.length; i++){
        let element = arr[i];
        let j = i;
        while(j> 0 && arr[j - 1] > element){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = element;

    }
    return arr;
}
let arr = [16, 24, 90, 0, 34, 21, 6, 2, 40];
console.log(insertionsort(arr));