// reverse a string in js

//method #1 - using split, reverse, and join
function reverseString(str) {
    let result = str.split("").reverse().join("")
    return result;
}

//testing
console.log(reverseString("hello"));
console.log(reverseString("white dog"));
console.log(reverseString("macaroni"));

//method #2 - create new string and iterate pushing from the end
function reverseString2(str){
    let result = ""
    for(var i = str.length-1; i>= 0; i--){
        result+=str[i]
    }
    return result
}
console.log(reverseString2("hello"));
console.log(reverseString2("white dog"));
console.log(reverseString2("macaroni"));