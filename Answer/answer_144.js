function fizzBuzzMini(n) {
    if(n % 3 === 0 && n % 5 === 0){
        return "FizzBuzz";
    }else if(n % 3 === 0){
        return "Fizz";
    }else if(n % 5 === 0){
        return "Buzz";
    }else{
        return String(n);
    }
}

// console.log(fizzBuzzMini(3));
// console.log(fizzBuzzMini(4));
// console.log(fizzBuzzMini(35));
// console.log(fizzBuzzMini(75));
// console.log(fizzBuzzMini(98));