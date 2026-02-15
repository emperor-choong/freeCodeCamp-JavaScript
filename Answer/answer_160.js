function computeScore(judgeScores, ...penalties) {
    judgeScores.sort((a, b) => a - b);
    let array = judgeScores.slice(1, judgeScores.length-1);

    let sum = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    let subtract = penalties.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    let result = sum - subtract;

    return result;
}

// console.log(computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1));
// console.log(computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
// console.log(computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1));
// console.log(computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0));
// console.log(computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5));