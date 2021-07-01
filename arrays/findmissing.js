//find the missing number in an array
//you are given an array of positive numbers from 1 to n, all which are present except for 'x'
//input array is not sorted
function findmissing(arr){
    // find sum of nums in list, linear scan O(n)
    let sum = 0;
    for(let i in arr){
        sum += arr[i];
    }
    //since the arr given is 1 to n, let's declare n
    //1 value is missing in arr
    let n = arr.length+1;
    //arithmetic series sum formula
    let sumwithn = Math.floor((n*(n+1))/2)
    //the difference between sumwithn and sum is the missing value in the array
    return sumwithn - sum;

}
const arr = [4,1,3,6,2];
console.log(findmissing(arr));