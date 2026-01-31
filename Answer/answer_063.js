function combinations(cards) {
    let n = 52;
    let r = cards;
    let nCr = factorial(n) / (factorial(r)*factorial(n-r));

    return Math.round(nCr);
}

function factorial(num){
    if(num === 0){
        return 1;
    }

    let multi = num;
    for(let i = num-1; i >= 1; i--){
        multi = multi*i;
    }

    return multi;
}

// console.log(combinations(52));
// console.log(combinations(1));
// console.log(combinations(2));
// console.log(combinations(5));
// console.log(combinations(10));
// console.log(combinations(50));