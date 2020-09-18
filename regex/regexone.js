//1. abcdefg, abcde, abc
var one = /abc/;
//1.5 abc123xyz, define "123", var g = 123;
var onefive = /123/;
//2. cat., 896., ?=+.
var two = /...\./;
//3, can, man, fan
var three = /[cmf]an$/;
//4. hog, dog
var four = /[hd]og$/;
var test4 = "dog";
var test44 = "cat";
console.log(test44.match(four));
console.log(four.test(test44))
//5. Ana, Bob, Cpc
var five = /[A-C][n-p][a-c]/;
//6. wazzzzzup, wazzzup
var six = /^waz{3,5}up$/;
var test6 = "wazzup";
console.log(six.test(test6))
//7. aaaabcc, aabbbbc, aacc
//* 0 or more reps, + 1 or more reps
var sev = /a+b*c+/;
var test7 = "aacc";
console.log(sev.test(test7))
//8. 1 file found?, 2 files found?, 24 files found?
//? considers the char before as optional
var eight = /\d.files? found\?$/;
//9. 1.   abc, 2.    abc, 3.       abc
//whitespace use \s, can also use * and +
var nine = /\d.\s+abc$/;
//10. Mission: successful
var ten = /^Mission:\s+successful$/;
//11. 	file_record_transcript.pdf, 	file_07241999.pdf
//We only want to capture lines that start with "file" and have the file extension ".pdf"
var elev = /^(file.+)\.pdf$/;
//12. Jan 1987, May 1969, Aug 2011
//ALSO extracting year as subgroup
var twelve = /([A-Z]\w+\s(\d+))/;
//or
var twelve2 = /(\w+ (\d+))/;
//13. 1280x720, 1920x1600, 1024x768
var thirteen = /(\d+)x(\d+)/;
//14. I love cats, I love dogs
var fourteen = /I love (cats|dogs)/;
//or
var fourteen2 = /(cats|dogs)/;



