function oddarray(){
  var arr = [];
  for(var i = 1; i < 256; i=i+2){
    arr.push(i);
  }
  return arr;
}

oddarray();
