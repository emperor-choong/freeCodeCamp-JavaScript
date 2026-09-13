function evaluate(numbers, operators) {
    let result = numbers[0];
    let i = 1;
    let j = 0;
    while(true){
        if(operators[j] === "+"){
            result = result + numbers[i];
        }else if(operators[j] === "-"){
            result = result - numbers[i];
        }else if(operators[j] === "*"){
            result = result * numbers[i];
        }else if(operators[j] === "/"){
            result = result / numbers[i];
        }else if(operators[j] === "%"){
            result = result % numbers[i];
        }

        i++;
        j++;

        if(i > numbers.length-1){
            break;
        }

        if(j > operators.length-1){
            j = 0;
        }
    }

    return result;
}

// console.log(evaluate([5, 6, 7, 8, 9], ['+', '-']));
// console.log(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']));
// console.log(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']));
// console.log(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']));
// console.log(evaluate([33, 11, 29, 13], ['/', '-']));