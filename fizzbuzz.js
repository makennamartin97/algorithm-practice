// Write a program that prints the numbers from 1 to 100. But for multiples 
// of three print Fizz instead of the number and for the multiples of five 
// print Buzz. For numbers which are multiples of both three and five print FizzBuzz

function fizzbuzz(){
    for(var i = 1; i < 101; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz")
        }
        if (i%3 === 0){
            console.log("Fizz")
        }
        if(i%5 === 0){
            console.log("Buzz")
        }
        else if(i%3 != 0 && i%5 != 0){
            console.log(i)
        }

    }
}
console.log(fizzbuzz())