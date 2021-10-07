// Write a function that calculates the difference of
// diagonals of a 2D array.

// EXAMPLE:
let arr = [[8,2,6],
            [4,1,3],
            [5,9,7]]

// Diagonal 1 sum: 8 + 1 + 7 = 16
// Diagonal 2 sum: 6 + 1 + 5 = 12

function diagonaldiff(arr){
    let i = 0;
    let d1 = 0;
    let d2 = 0;
    while(i < arr.length){
        d1+=arr[i][i];
        d2+=arr[i][arr.length-1-i];
        i++;
    }
    console.log(d1,d2, "diff:", Math.abs(d1-d2))
    return Math.abs(d1 - d2)
}
console.log(diagonaldiff(arr)) //16 2 diff: 4