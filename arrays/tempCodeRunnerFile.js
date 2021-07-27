//Maximum Sum Subarray of Size K 
//Given an array of positive numbers and a positive number ‘k,’ find the 
//maximum sum of any contiguous subarray of size ‘k’.

function max_sub_array_of_size_k(k, arr){
    //set variables- max sum found, window sum, and the window start
    let maxSum = 0; // maximum sum of all the windows
    let windowSum = 0; // sum of just the specific window
    let windowStart = 0; // first index value of window, so you can
    // remove from sum as window goes forward

    //loop through the array
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        //add the value to the window sum
        windowSum+=arr[windowEnd]
        //if the index/windowEnd is one less than k (the length of the
        // given window minus 1 since the index starts at 0)
        //then we want to move the starting variable up one and subtract from 
        //the windowsum
        //as well as compare the windowsum to the max sum
        if(windowEnd >= k-1){
            maxSum = Math.max(windowSum, maxSum)
            windowSum-=arr[windowStart]
            windowStart++
        }

    }
    return maxSum


}
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);