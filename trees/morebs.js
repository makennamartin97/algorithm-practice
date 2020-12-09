function BS(low, high, key){
    while(low <= high){
        let mid = low + high / 2;
        if(arr[mid] < key){
            low = mid+1;
        }
        else if(arr[mid] > key){
            high = mid-1;
        }
        else{
            return mid;
        }
        
    }
    return -1;

}
let low = 0;
let high = 9;
let key = 3;
let arr = [0, 3, 6, 7, 9]
console.log(BS(0, 9, 3))
