var arr = [45, 32, 13, 1, 6, 78];
function printArrayValues(arr) {
    for (var index = 0;index < arr.length;index++) {
    console.log("array[", index, "] is equal to", arr[index]); }


}
//console.log(printArrayValues(arr));

//Given an array and an additional value, ​insert this value ​at the 
//beginning of the array. Do this without using any built-in array methods.
var val = 18
function pushFront(arr, val){
    arr[arr.length] = val;
    for (var i = arr.length - 1; i >0; i--) {
        var temp = arr[i];
        arr[i] = arr[i-1]
        arr[i-1] = temp;
    }
    return arr;

}
console.log(pushFront(arr, val));

//Given an array, ​remove and return the value ​at the beginning of the array. 
//with shift()
function popFront(arr){
    console.log("The first value is " + arr[0]);
    arr.shift();
    console.log("The first value is now " + arr[0]);
}
//console.log(popFront(arr));
//without shift()
function PopFront(arr) {
    var temp = arr[0];
    for (var x = 0; x < arr.length-1; x++){
        var swap = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = swap;
    }
    arr.pop();
    return temp;
}
//console.log(PopFront(arr));

//Given an array, index, and additional value, ​insert the value into the array 
//a​ t the given index. Do this without using built-in array methods. You can 
//think of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.
var index = 3;
var val = 0;
function insertAt(arr, index, val){
    for(var i = 0; i < arr.length; i++){
        while(i === index){
            arr.push(val);
        }
        return arr;
    }

}
//console.log(insertAt(arr, index, val));

