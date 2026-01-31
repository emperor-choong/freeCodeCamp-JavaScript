function nthFibonacci(n) {
    let result = [0, 1];
    if(n === 1){
        return result[0];
    }else if(n === 2){
        return result[1];
    }

    let next;
    for(let i = 0; i < n-2; i++){
        next = result[i] + result[i+1];
        result.push(next);
    }

    return result[n-1];
}

// console.log(nthFibonacci(4));
// console.log(nthFibonacci(10));
// console.log(nthFibonacci(15));
// console.log(nthFibonacci(40));
// console.log(nthFibonacci(75));

