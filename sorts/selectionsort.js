var arr = [16, 24, 90, 0, 34, 21, 6, 2, 40];
//selection sort

function selectionsort(arr){
    for(var i = 0; i < arr.length; i++){
        let minindex = i;
        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[minindex]){
                minindex = j;
            }

        }
        if(minindex !== i){
            swap(arr, i, minindex);
        }
    }
    return arr;

}

function swap(arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

console.log("OG array:" + arr);
console.log(selectionsort(arr));