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
        if(windowEnd >= k-1){
            maxSum = Math.max(windowSum, maxSum)//updates max
            windowSum-=arr[windowStart]//subtract the element going out
            windowStart++//slides the window ahead
        }

    }
    return maxSum


}
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);

// Maximum sum of a subarray of size K: 9
// Maximum sum of a subarray of size K: 7

//time complexity
//O(n) - linear
//iterates through once