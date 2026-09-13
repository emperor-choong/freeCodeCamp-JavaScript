function isUnnaturalPrime(n) {
    let x = Math.abs(n);
    let count = 0;
    for(let i = 1; i <= x; i++){
        if(x % i === 0){
            count++;
        }
    }

    return count === 2;
}

// console.log(isUnnaturalPrime(1));
// console.log(isUnnaturalPrime(-1));
// console.log(isUnnaturalPrime(19));
// console.log(isUnnaturalPrime(-23));
// console.log(isUnnaturalPrime(0));
// console.log(isUnnaturalPrime(97));
// console.log(isUnnaturalPrime(-61));
// console.log(isUnnaturalPrime(99));
// console.log(isUnnaturalPrime(-44));