const sortedarr = [2, 5, 8, 14, 22, 35, 40, 53, 69];
const num = 14;

function bs(sortedarr, num){
    for(var i = 0; i < sortedarr.length; i++){
        for(var k = sortedarr.length - 1; k > 0; k--){
            if(num == sortedarr[i] || num == sortedarr[k]){
                return true;
            }
        }
    }
    return false;
}
console.log(bs(sortedarr, num));