function merge(a1, a2){
    let i = 0;
    let j = 0;
    let a3 = [];
    while( i < a1.length && j < a2.length){
        if(a1[i] < a2[j]){
            a3.push(a1[i]);
            i++;
        }else{
            a3.push(a2[j]);
            j++;
        }
    }
    for(; i < a1.length;i++){
        a3.push(a1[i])
    }
    for(; j < a2.length; j++){
        a3.push(a2[j])
    }
    return a3;
}
let a1 = [3, 6, 9, 10, 11];
let a2 = [5, 6, 12, 13];
console.log(merge(a1, a2));
