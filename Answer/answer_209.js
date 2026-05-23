function fixPrankNumber(arr) {
    let diff = [];
    for(let i = 0; i < arr.length-1; i++){
        diff.push(arr[i+1] - arr[i]);
    }

    let freq = {};
    let correctDiff = diff[0];
    let maxCount = 0;

    for(let d of diff){
        if(freq[d] === undefined){
            freq[d] = 1;
        }else{
            freq[d] = freq[d] + 1;
        }

        if(freq[d] > maxCount){
            maxCount = freq[d];
            correctDiff = d;
        }
    }

    let result = [...arr];

    if(result[1] - result[0] !== correctDiff && result[2] - result[1] === correctDiff){
        result[0] = result[1] - correctDiff;
        return result;
    }

    for(let i = 0; i < result.length-1; i++){
        if(result[i+1] - result[i] !== correctDiff){
            result[i+1] = result[i] + correctDiff;
            break;
        }
    }

    return result;
}

// console.log(fixPrankNumber([2, 4, 7, 8, 10]));
// console.log(fixPrankNumber([10, 10, 8, 7, 6]));
// console.log(fixPrankNumber([12, 24, 36, 48, 61, 72, 84, 96]));
// console.log(fixPrankNumber([4, 1, -2, -5, -8, -5]));
// console.log(fixPrankNumber([0, 100, 200, 300, 150, 500]));
// console.log(fixPrankNumber([400, 425, 400, 375, 350, 325, 300]));
// console.log(fixPrankNumber([-5, 5, 10, 15, 20]));