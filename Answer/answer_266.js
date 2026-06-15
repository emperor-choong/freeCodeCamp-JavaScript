function fizzBuzzCount(start, end) {
    let array = Array.from(
        {length: end - start + 1},
        (element, index) => start + index
    );

    let result = array.reduce((accumulator, currentValue) => {
        if(currentValue % 3 === 0 && currentValue % 5 === 0){
            accumulator["fizz"]++;
            accumulator["buzz"]++;
        }else if(currentValue % 3 === 0){
            accumulator["fizz"]++;
        }else if(currentValue % 5 === 0){
            accumulator["buzz"]++;
        }

        return accumulator;
    }, {fizz: 0, buzz: 0});

    return result;
}

// console.log(fizzBuzzCount(1, 11));
// console.log(fizzBuzzCount(14, 41));
// console.log(fizzBuzzCount(24, 100));
// console.log(fizzBuzzCount(-635, -14));
// console.log(fizzBuzzCount(-5432, 6789));