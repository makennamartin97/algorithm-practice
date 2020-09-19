//leet code reverse string

var reverseString = function(s) {
    let i = 0;
    let j = s.length-1;
    while(i <= j){
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp;
        i++;
        j--;
        
    }
    return s;
    
};
var test = ["h","e","l","l","o"];
var test2 = ["M","a","k","e","n","n","a"]
console.log(reverseString(test2));