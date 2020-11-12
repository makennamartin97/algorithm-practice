function mutation(arr) {
    let target = arr[0].toLowerCase();
    let next = arr[1].toLowerCase();
  
    for(var i = 0; i < next.length; i++){
      if(!target.includes(next[i])){
        return false;
      }
    }
    return true
  
  
  }
  
  console.log(mutation(["hello", "hey"])); // false
  console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // true
  console.log(mutation(["hello", "neo"])) // false