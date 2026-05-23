function passingCount(scores, passingScore) {
    let result = scores.reduce((accumulator, currentValue) => {
        if(currentValue >= passingScore){
            return accumulator + 1;
        }else{
            return accumulator;
        }
    }, 0);

    return result;
}

// console.log(passingCount([90, 85, 75, 60, 50], 70));
// console.log(passingCount([100, 80, 75, 88, 72, 74, 79, 71, 60, 92], 75));
// console.log(passingCount([79, 60, 88, 72, 74, 59, 75, 71, 80, 92], 60));
// console.log(passingCount([76, 79, 80, 70, 71, 65, 79, 78, 59, 72], 85));
// console.log(passingCount([84, 65, 98, 53, 58, 71, 91, 80, 92, 70, 73, 83, 86, 69, 84, 77, 72, 58, 69, 75, 66, 68, 72, 96, 90, 63, 88, 63, 80, 67], 60));