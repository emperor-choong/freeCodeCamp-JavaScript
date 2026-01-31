function isCircularPrime(n) {
    let x = n.toString();
    let rotation = [];
    for(let i = 0; i < x.length; i++){
        rotation.push(Number(x.slice(i) + x.slice(0, i)));
    }

    let result = rotation.every(isPrime);
    return result;
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

// console.log(isCircularPrime(197));
// console.log(isCircularPrime(23));
// console.log(isCircularPrime(13));
// console.log(isCircularPrime(89));
// console.log(isCircularPrime(1193));