function primeFactorization(n) {
    const factors = [];
    let divisor = 2;

    while (divisor * divisor <= n) {
        while (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        }
        divisor++;
    }

    if (n > 1) {
        factors.push(n);
    }

    return factors;
}

// console.log(primeFactorization(20));
// console.log(primeFactorization(17));
// console.log(primeFactorization(15));
// console.log(primeFactorization(35));
// console.log(primeFactorization(999));
// console.log(primeFactorization(360));
// console.log(primeFactorization(510510));