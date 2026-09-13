function isGoldenRatio(a, b) {
    let ratio = a > b ? (a / b) : (b / a);

    if(ratio >= (1.618 - 0.01) && ratio <= (1.618 + 0.01)){
        return true;
    }else{
        return false
    }
}

// console.log(isGoldenRatio(21, 34));
// console.log(isGoldenRatio(15, 20));
// console.log(isGoldenRatio(8, 13));
// console.log(isGoldenRatio(10, 16));
// console.log(isGoldenRatio(1618, 1000));
// console.log(isGoldenRatio(88, 55));