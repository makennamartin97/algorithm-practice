//freecodecamp
// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let res = []
    for(var i = 0; i < arr.length; i++){
      if(arr[i]){
        res.push(arr[i])
      }
    }
    return res;
  }
  
  console.log(bouncer([7, "ate", "", false, 9])); //[ 7, 'ate', 9 ]
  console.log(bouncer([false, null, 0, NaN, undefined, ""])) // []

  // another solution

  function bouncer2(arr){
      return arr.filter(Boolean);
  }
  console.log(bouncer2([7, "ate", "", false, 9])); //[ 7, 'ate', 9 ]
  console.log(bouncer2([false, null, 0, NaN, undefined, ""])) //[]