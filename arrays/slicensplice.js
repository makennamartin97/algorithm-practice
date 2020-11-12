//freecodecamp
//You are given two arrays and an index.

//Copy each element of the first array into the second array, in order.

//Begin inserting elements at index n of the second array.

//Return the resulting array. The input arrays should remain the same after 
//the function runs.

  function frankenSplice2(arr1, arr2, n) {
    let res = arr2.slice();
    for(var i = arr1.length-1; i >= 0; i--){
      res.splice(n, 0, arr1[i]);
    }
    console.log(arr1, arr2)
    return res
  }
  
  console.log(frankenSplice2([1, 2, 3], [4, 5, 6], 1)); //[ 4, 1, 2, 3, 5, 6 ]
  console.log(frankenSplice2([1, 2, 3], [4, 5], 1)) //[ 4, 1, 2, 3, 5 ]