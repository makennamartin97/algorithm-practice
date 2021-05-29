// Write a function that takes in a list and a value, and adds the value 
//to the front of that list, outputting the changed list. This should be 
//done in place> This means you should not create a new list, but change 
//the existing one.

function pushtofront(arr, val){
    arr.unshift(val)
    return arr
}

//testing
console.log(pushtofront([0,1,2,3,4,5],9))
// [9, 0, 1, 2, 3, 4, 5]
