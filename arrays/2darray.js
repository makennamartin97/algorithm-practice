function largestOfFour(arr) {
    let res = [];
    for(var i = 0; i < arr.length;i++){
      let max = arr[i][0];
      for(var j = 0; j < arr[i].length; j++){
        if(arr[i][j] > max){
          max = arr[i][j];
        }
      }
      res[i] = max;
    }
    return res;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  //[ 5, 27, 39, 1001 ]
  console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
  //[ 9, 35, 97, 1000000 ]