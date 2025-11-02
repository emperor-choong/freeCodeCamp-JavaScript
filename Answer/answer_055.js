function nthPrime(n) {
    let number = 2;
    let primeNumber = [];
    while(true){
        if(isPrime(number) === true){
            primeNumber.push(number);
        }

        if(primeNumber.length === n){
            return primeNumber[n-1];
        }

        number++;
    }
}

function isPrime(n){
    let counter = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            counter++;
        }
    }

    if(counter === 2){
        return true;
    }else{
        return false;
    }
}

// console.log(nthPrime(5));
// console.log(nthPrime(10));
// console.log(nthPrime(16));
// console.log(nthPrime(99));
// console.log(nthPrime(1000));