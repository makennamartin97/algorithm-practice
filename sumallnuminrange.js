//freecodecamp intermediate
//Intermediate Algorithm Scripting: Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them. The lowest number will not 
//always come first.

//For example, sumAll([4,1]) should return 10 because sum of all the numbers 
//between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    let x = arr[1];
    let y = arr[0];
    let sum = 0;
    if(x - y >= 0){
      for(var i = y; i <= x; i++){
        sum+=i;
      }
    }else{
      for(var i = x; i <= y; i++){
        sum+=i;
      }
    }
    return sum;
  }
  
  console.log(sumAll([1, 4])); // 10
  console.log(sumAll([4, 1])); // 10
  console.log(sumAll([5, 10])); // 45