//Question:
//Write a function, FindIntersection, that reads an array of strings which 
//will contain two elements: the first element will represent a list of 
//comma-separated numbers sorted in ascending order, the second element 
//will represent a second list of comma-separated numbers (also sorted). 
//Your goal is to return a string of numbers that occur in both elements 
//of the input array in sorted order. If there is no intersection, return 
//the string “false”.
// example: if the input array is [“1, 3, 4, 7, 15”, “1, 2, 4, 15, 21”] 
// the output string should be “1, 4, 15” because those numbers appear in 
// both strings (they are the common elements). The array given will not 
// be empty, and each string inside the array will be of numbers sorted 
// in ascending order and may contain negative numbers.
// Another example: if the input array is [“1, 3, 9, 10, 17, 18”, “1, 4, 9, 10”] 
//the output string should be “1, 9, 10” because those numbers appear in 
//both of the strings.

function FindIntersection(arr){
    //result
    const result = [];
    //split each element str in the array into substrings
    const p1 = arr[0].split(", ")
    const p2 = arr[1].split(", ")
    // iterate thru each, converting the str element into an int
    p1.forEach(p1element => {
        const p1num = parseInt(p1element)
        p2.forEach(p2element => {
            const p2num = parseInt(p2element)
            // if one matches add to the result
            if(p1num === p2num){
                result.push(p1num)
            }
        })
    });
    //if there are none in the result array return false
    if(result.length === 0){
        return false
    }
    //return result and convert into string
    return result.join(", ")

}
//testing
let arr = ['1, 3, 4, 7, 15', '1, 2, 4, 15, 21'] // 1, 4, 15
//let arr = ['1, 3, 7', '2, 4, 15, 21'] // false
console.log(FindIntersection(arr))
