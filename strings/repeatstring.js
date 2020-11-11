//freecodecamp
//Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number. For the purpose of 
//this challenge, do not use the built-in .repeat() method.
function repeatStringNumTimes(str, num) {
    let res = []
    let arr = str.split(" ");
    if(num <= 0){
      return "";
    }
    for(var i = 1; i <= num; i++){
      res.push(arr);
    }
    return res.join("");
  
    
  }
  
  console.log(repeatStringNumTimes("abc", 3));