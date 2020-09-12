//merge sort
//faster than the other 3

//taking 2 sorted list, comparing each val, and pushing into new list

function mergesort(arr1, arr2){
    let arr = [];
    let i = 0;
    let j = 0;
    while( i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            arr.push(arr2[j]);
            j++;
        }else{
            arr.push(arr1[i]);
            i++;
        }
        
    }
    
    return arr;
}
var arr1 = [4, 15, 16, 50];
var arr2 = [8, 23, 42, 108];
console.log(mergesort(arr1, arr2))