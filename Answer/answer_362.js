function tribonacciSequence(startSequence, length) {
    let result = startSequence;
    if(length === 0){
        return [];
    }else if(length < 4){
        return result.slice(0, length); 
    }

    for(let i = 0; i < length - 3; i++){
        result.push(result[i] + result[i+1] + result[i+2]);
    }

    return result;
}

// console.log(tribonacciSequence([0, 0, 1], 20));
// console.log(tribonacciSequence([21, 32, 43], 1));
// console.log(tribonacciSequence([0, 0, 1], 0));
// console.log(tribonacciSequence([10, 20, 30], 2));
// console.log(tribonacciSequence([10, 20, 30], 3));
// console.log(tribonacciSequence([123, 456, 789], 8));