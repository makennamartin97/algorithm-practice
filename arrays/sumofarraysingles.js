//codewars sum of array singles

//In this Kata, you will be given an array of numbers in which two numbers 
//occur once and the rest occur only twice. Your task will be to return the 
//sum of the numbers that occur only once.

//For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 
//occur once, and their sum is 15.

function repeats(arr){
    let singles = [];
    let dbl = [];
    let sorted = arr.sort();
    let count = 0;
    for(var i = sorted.length-1; i >=0; i--){
      if(sorted[i] != sorted[i-1] && sorted[i] != sorted[i+1]){
        singles.push(sorted[i])
      }
      
    }
    let sum = singles[0] + singles[1];
    return sum
  };