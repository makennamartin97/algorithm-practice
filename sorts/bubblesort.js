//iterative bubble sort

function bubblesort(arr){
    let swaps;
    do{
        swaps = false;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i + 1]
                arr[i+1] = arr[i]
                arr[i] = temp;
                swaps = true;
            }
        }
        
    }while (swaps);
    return arr;
    
    
}
let arr = [16, 24, 90, 0, 34, 21, 6, 2, 40];
console.log(bubblesort(arr));

