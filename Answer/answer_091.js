function countPermutations(str) {
    let frequency = {};
    for(let letter of str){
        if(frequency[letter] === undefined){
            frequency[letter] = 1;
        }else{
            frequency[letter] = frequency[letter] + 1;
        }
    }

    let denominator = 1;
    for(let f of Object.values(frequency)){
        denominator = denominator * factorial(f);
    }

    let numerator = factorial(str.length);

    // multiset permutation formula
    let result = numerator / denominator;

    return result;
}

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result*i;
    }

    return result;
}

// console.log(countPermutations("abb"));
// console.log(countPermutations("abc"));
// console.log(countPermutations("racecar"));
// console.log(countPermutations("freecodecamp"));