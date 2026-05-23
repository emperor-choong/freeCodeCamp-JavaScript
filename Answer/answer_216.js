function isFizzBuzz(arr) {
    let n;
    for(let i = 0; i < arr.length; i++){
        if(Number.isInteger(arr[i]) === true){
            n = arr[i] - i;
            break;
        }
    }

    let x = [];
    for(let i = 0; i < arr.length; i++){
        x.push(n + i);
    }

    for(let i = 0; i < arr.length; i++){
        if(x[i] % 3 === 0 && x[i] % 5 === 0){
            if(arr[i] !== "FizzBuzz"){
                return false;
            }
        }else if(x[i] % 3 === 0){
            if(arr[i] !== "Fizz"){
                return false;
            }
        }else if(x[i] % 5 === 0){
            if(arr[i] !== "Buzz"){
                return false;
            }
        }
    }

    return true;
}

// console.log(isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]));
// console.log(isFizzBuzz([13, 14, "FizzBuzz", 16, 17]));
// console.log(isFizzBuzz([1, 2, "Fizz", 4, 5]));
// console.log(isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]));
// console.log(isFizzBuzz([1, 2, "Fizz", "Buzz", 5]));
// console.log(isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]));
// console.log(isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]));