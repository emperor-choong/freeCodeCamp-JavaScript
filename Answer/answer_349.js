function sumOfSquares(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum = sum + i**2;
    }

    return sum;
}

// console.log(sumOfSquares(5));
// console.log(sumOfSquares(10));
// console.log(sumOfSquares(25));
// console.log(sumOfSquares(500));
// console.log(sumOfSquares(1000));