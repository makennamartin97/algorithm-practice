function rSum(n) {
    if (n === 1) {
      return 1;
    } else {
        console.log(n)
        console.log("n -1:", n-1);
 
        return rSum(n-1) + n;
    }
  }

console.log(rSum(13));