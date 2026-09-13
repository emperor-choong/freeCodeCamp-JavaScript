function calculateHandicap(scores, pars) {
    let sum = 0;
    for(let i = 0; i < scores.length; i++){
        sum = sum + (scores[i] - pars[i]);
    }

    let average = sum / scores.length;
    return average.toFixed(1);
}

// console.log(calculateHandicap([72, 72, 72], [72, 72, 72]));
// console.log(calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72]));
// console.log(calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36]));
// console.log(calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]));
// console.log(calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]));