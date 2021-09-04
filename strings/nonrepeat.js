// given a string, return the first non repeating character
function nonrepeat(str){
    let myMap = new Map()
    //keys could be the characters 
    //values could be the number or times it appears
    for(let i = 0; i <= str.length; i++){
        let char = str.charAt(i)
        if(myMap.has(char)){
            myMap.set(char, myMap.get(char)+1)
        }else{
            myMap.set(char, 1)
        }
    }
    //loop thru again, lookups are constant time
    for(let i = 0; i <= str.length; i++){
        let char2 = str.charAt(i)
        if(myMap.get(char2)==1) return char2
    }

}
console.log(nonrepeat('aaabbcddde')) //c
console.log(nonrepeat('abbccdde')) //a
console.log(nonrepeat('cvatatc')) //v

//math.matrix([[0, 1], [2, 3], [4, 5]])   // Matrix, size [3, 2]
const matrix = [[0, 1], [2, 3], [4, 5]]
console.log(matrix)