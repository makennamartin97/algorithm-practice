//freecodecamp
//Check if a string (first argument, str) ends with the given target 
//string (second argument, target).

//regex solution
function confirmEnding(str, target) {
    const x = new RegExp(target + "$")
    return x.test(str);
  }
  
  confirmEnding("Bastian", "n");