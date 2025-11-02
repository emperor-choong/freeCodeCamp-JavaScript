function tooMuchScreenTime(hours) {
    let constraintOne = hours.some((hour) => hour >= 10);

    let constraintTwo = hours.some((_, i) => {
        let lastIndex = hours.length - 1;
        if(i + 2 <= lastIndex){
            let sum = hours[i] + hours[i+1] + hours[i+2];
            let average = sum / 3;
            return average >= 8;
        }
    });

    let totalHoursSevenDays = hours.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let averageHoursSevenDays = totalHoursSevenDays / 7;
    let constraintThree = averageHoursSevenDays >= 6;

    if(constraintOne === true || constraintTwo === true || constraintThree === true){
        return true;
    }else{
        return false;
    }
}

// console.log(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]));
// console.log(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]));
// console.log(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]));
// console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]));
// console.log(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]));
// console.log(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]));
// console.log(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]));