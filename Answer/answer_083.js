function isFizzBuzz(sequence) {
    let correctSequence = [];
    for(let i = 1; i <= sequence.length; i++){
        if(i % 3 === 0 && i % 5 === 0){
            correctSequence.push("FizzBuzz");
        }else if(i % 3 === 0){
            correctSequence.push("Fizz");
        }else if(i % 5 === 0){
            correctSequence.push("Buzz");
        }else{
            correctSequence.push(i);
        }
    }

    let result = sequence.every((element, index) => {
        return element === correctSequence[index];
    });

    return result;
}

// console.log(isFizzBuzz([1, 2, "Fizz", 4]));
// console.log(isFizzBuzz([1, 2, 3, 4]));
// console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7]));
// console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]));
// console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]));
// console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]));
// console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]));