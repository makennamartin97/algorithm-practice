function bubblesort(n) {
    for (let outer = 0; outer < n.length; outer++) {
      let outerElement = n[outer];
  
      for (let inner = outer + 1; inner < n.length; inner++) {
        let innerElement = n[inner];
  
        if(outerElement > innerElement) {
          n[outer] = innerElement;
          n[inner] = outerElement;
          outerElement = n[outer];
          innerElement = n[inner];
        }
      }
    }
    return n;
  }

  //testing
console.log(bubblesort([34,56,12,0,2,89,31,12])); //  [0,  2, 12, 12, 31, 34, 56, 89]

