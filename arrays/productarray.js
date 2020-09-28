//Given an array of integers, return a new array such that each element at 
//index i of the new array is the product of all the numbers in the original 
//array except the one at i.

//For example, if our input was [1, 2, 3, 4, 5], the expected output would 
//be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output 
//would be [2, 3, 6].

function productarray(arr){
    let res = [];
    for(var i = 0; i <= arr.length-1; i++){
        let prod = 1;
        let j = 0;
        while( j < arr.length){
            if(j === i){
                j++;
            }else{
                prod = prod * arr[j];
                j++;
            }
        }
        res.push(prod);
    }
    return res;

}
let arr = [1,2,3,4,5,6];
console.log(productarray(arr));
