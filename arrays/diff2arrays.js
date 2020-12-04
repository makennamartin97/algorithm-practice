// freecodecamp diff two arrays
// Compare two arrays and return a new array with any items only found in 
// one of the two given arrays, but not both. In other words, return the
// symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];
    var arr3 = arr1.concat(arr2);
    for(var i = 0; i < arr3.length; i++){
      if(arr1.includes(arr3[i]) && !arr2.includes(arr3[i])){
        newArr.push(arr3[i])
      }
      else if(arr2.includes(arr3[i]) && !arr1.includes(arr3[i])){
      newArr.push(arr3[i])
      }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);