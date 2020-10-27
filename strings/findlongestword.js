function findlongestword(str){
    let longestword = 0
    let stringsplit = str.split(" ")
    for(var i = 0; i < stringsplit.length; i++){
        if(stringsplit[i].length > longestword){
            longestword = stringsplit[i].length
        }
    }
    return longestword

}
console.log(findlongestword("My cat likes to eat bananas")) //7
console.log(findlongestword("The water is wet")) //5
console.log(findlongestword("My favorite color is red")) //8
