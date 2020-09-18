// . matches/means any character
//ex: b.t
//matches "bot" and "bat" and any other word of three characters which 
//starts with b and ends in t.
//if u want to search for dot symbol, use ' \. ', so it would be 'b\.t'

//* means “anything before this symbol repeated any number of times.”

//Together (.*) they mean “any symbol any number of times.” 

//If you wanted to match everything up to the first occurrence of 
//"lua" instead, you would use the following RegEx:

//loadScript.*?lua

//Which means, “match everything starting with"loadScript" followed by anything up to the first occurrence of "lua""

//character classes
//[0-9] matches all 0-9
//[a-z] and [A-Z]
//[a-zA-Z] will match both uppercase and lowercase

let petString = "James has a pet Cat.";
let petRegex = /dog|cat|bird|fish/i;
let result = petRegex.test(petString);
console.log(result);

//make patterns case insensitive
//To ignore case we can do it by adding the i flag at the end of a pattern, 
//like so /some-pattern/i.

//When we want to extract the matched value we can use match() method.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result2 = extractStr.match(codingRegex);
console.log(result2);
//when we watch to extract multiple of the values- use g
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
console.log(testStr.match(ourRegex)); // returns ["Repeat", "Repeat", "Repeat"]

//match letters of the alphabet
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
//ignoring casing
let alphabetRegex = /[a-z]/ig;
let result3 = quoteSample2.match(alphabetRegex);
console.log(result3);

//vowel regex - extract every vowel from a string
let quoteSample3 = "You get the best of both worlds";
let vowelRegex = /[aeiou]/ig;
let result4 = quoteSample3.match(vowelRegex);
console.log(result4);

let try1 = "This is my first regex try";
let randregex = /[fgrpo]/ig;

let result5 = try1.match(randregex);
console.log(result5);