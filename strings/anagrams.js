//Check to see if two provided strings are anagrams of each other. One string is an anagram of the another if it is the same quantity. Only consider characters, not spaces or punctuations. Consider capital letters to be the same as lower case.
function anagrams(s1, s2){
    //check the lengths of the strings
    if(s1.length !== s2.length){
        return false
    }
    //change both to lowercase
    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()
    //create a map to store characters
    let myMap = new Map();
    //loop through first string
    //check if char is in there and increment, if not add in new set
    let count = 0
    for(let i = 0; i < s1.length; i++){
        if(!myMap.has(s1[i])){
            myMap.set(s1[i], count++)
        }else{
            myMap[s1[i]] = count++
        }
    }

    //loop through second string and decrement each char if its in there
    for(let j = 0; j < s2.length; j++){
        if(myMap.has(s2[j])){
            myMap.get(s2[j], count--)
        }else{
            return false
        }
        
    }
    //make sure every value is zero in map
    for(let k in myMap.values()){
        if(k !== 0){
            return false
        }
    }
    return true

}
console.log(anagrams('racecar', 'racecar'))//true
console.log(anagrams('racecar', 'raccar'))//false
console.log(anagrams('Sodapop', 'ppodasO'))//true