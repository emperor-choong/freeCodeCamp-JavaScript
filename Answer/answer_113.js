function sumDivisors(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            sum = sum + i;
        }
    }

    return sum;
}

// console.log(sumDivisors(6));
// console.log(sumDivisors(13));
// console.log(sumDivisors(28));
// console.log(sumDivisors(84));
// console.log(sumDivisors(549));
// console.log(sumDivisors(9348));