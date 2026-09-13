function fibonacciSequence(startSequence, length) {
    if(length === 0){
        return [];
    }else if(length === 1){
        return [startSequence[0]];
    }else if(length === 2){
        return startSequence;
    }

    for(let i = 2; i < length; i++){
       startSequence.push(startSequence[i-2] + startSequence[i-1]); 
    }

    return startSequence;
}

// console.log(fibonacciSequence([0, 1], 20));
// console.log(fibonacciSequence([21, 32], 1));
// console.log(fibonacciSequence([0, 1], 0));
// console.log(fibonacciSequence([10, 20], 2));
// console.log(fibonacciSequence([123456789, 987654321], 5));