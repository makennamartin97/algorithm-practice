//given a sorted array and a sum, return whether the array contains a pair
//equals the sum

const sarr = [0, 2, 13, 23, 39, 56, 90, 103]
function google(sarr, sum){
    let start = 0
    let end = sarr.length-1
    let result = false;
    while(start < end){
        let total = sarr[start] + sarr[end];
        if(total === sum){
            result = true;
            break;
        }
        if(total < sum){
            start++;
        }
        if(total > sum){
            end--;
        }
    }
    return result;
}
console.log("Google Q:", google(sarr, 13));