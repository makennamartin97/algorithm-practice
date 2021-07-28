//Smallest Subarray with a given sum
//Given an array of positive numbers and a positive number ‘S,’ find the
// length of the smallest contiguous subarray whose sum is greater than 
//or equal to ‘S’. Return 0 if no such subarray exists.

const smallest_subarray_with_given_sum = function(s, arr) {
    // TODO: Write your code here
    let windowStart = 0;
    let windowSum = 0;
    let minLength = Infinity;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum+=arr[windowEnd]
        while(windowSum>=s){
            minLength = Math.min(minLength,windowEnd-windowStart+1)
            windowSum-=arr[windowStart]
            windowStart++

        }

    }
    if(windowSum === Infinity){
        return -1
    }
    return minLength
  };
  console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`);

// Smallest subarray length: 2
// Smallest subarray length: 1
// Smallest subarray length: 3