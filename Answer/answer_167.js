function calculateStartDelays(jumpScores) {
    let highest = jumpScores.reduce((accumulator, currentValue) => {
        if(currentValue > accumulator){
            return currentValue;
        }else{
            return accumulator;
        }
    });

    let result = jumpScores.map(x => {
        return Math.round((highest-x)*1.5);
    })

    return result;
}

// console.log(calculateStartDelays([120, 110, 125]));
// console.log(calculateStartDelays([118, 125, 122, 120]));
// console.log(calculateStartDelays([100, 105, 95, 110, 120, 115, 108]));
// console.log(calculateStartDelays([130, 125, 128, 120, 118, 122, 127, 115, 132, 124]));