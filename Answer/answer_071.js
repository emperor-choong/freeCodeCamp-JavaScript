function gcd(x, y) {
    let divisorX = divisor(x);
    let divisorY = divisor(y);
    for(let i = divisorX.length-1; i >= 0; i--){
        for(let j = divisorY.length-1; j >= 0; j--){
            if(divisorX[i] === divisorY[j]){
                return divisorX[i];
            }
        }
    }
}

function divisor(number){
    let result = [];
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            result.push(i);
        }
    }

    return result;
}

// console.log(gcd(4, 6));
// console.log(gcd(20, 15));
// console.log(gcd(13, 17));
// console.log(gcd(654, 456));
// console.log(gcd(3456, 4320));