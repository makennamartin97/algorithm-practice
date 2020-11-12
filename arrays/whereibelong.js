//freecodecamp
//Basic Algorithm Scripting: Where do I Belong
//Return the lowest index at which a value (second argument) should be inserted 
//into an array (first argument) once it has been sorted. The returned value 
//should be a number.

//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is 
//greater than 1 (index 0), but less than 2 (index 1).

//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array 
//has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) 
//and greater than 5 (index 1).

//solution 1
function getIndexToIns(arr, num) {
    //push num to end
    arr.push(num);
    //sort() doesn't work bc it sorts alphabetically so pass it a fxn
    arr.sort(function(a, b) {
      return a - b;
    });
    //return index of num
    return arr.indexOf(num)
  }
  console.log(getIndexToIns([40, 60], 50)); //1
  console.log(getIndexToIns([5, 3, 20, 3], 5)) //2

  //solution 2
  function getIndexToIns2(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
    let i = 0;
    while(num > arr[i]){
      i++;
    }
    return i;
  }
  console.log(getIndexToIns2([40, 60], 50)); //1
  console.log(getIndexToIns2([5, 3, 20, 3], 5)) //2