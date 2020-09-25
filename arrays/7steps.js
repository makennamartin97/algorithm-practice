//find the number of common variables between 2 given arrays


function commonnums(x, z){
    let count = 0;
    for(var i = 0; i <= x.length; i++){
        if(z.includes(x[i])){
            count++;
        }
    }
    return count;
}
let x = [1, 8, 9, 14, 15]
let z = [3, 4, 8, 9, 14, 15]
console.log(commonnums(x,z));