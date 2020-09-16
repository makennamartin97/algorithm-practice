var arr = [24, 8, 23, 3];
var num = 23;
function linearsearch(num, arr){
    
    for(var i = 0; i < arr.length; i++){
        
        if(arr[i] == num){
            console.log("Found num", num, "at index", i);
            return i;
            break;
        }
        if(arr[i] !== num){
            console.log(false);
            //return false;
            continue;
        }
        
        

    }
    
    //return i;

}
linearsearch(100, arr);  
//linearsearch(-99, arr); // => false
//console.log(linearsearch(num, arr));

  
