function checkEligibility(athleteWeights, sledWeight) {
    let totalWeight = athleteWeights.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0) + sledWeight;

    if(athleteWeights.length === 1){
        if(sledWeight >= 162 && totalWeight <= 247){
            return "Eligible";
        }else{
            return "Not Eligible";
        }
    }else if(athleteWeights.length === 2){
        if(sledWeight >= 170 && totalWeight <= 390){
            return "Eligible";
        }else{
            return "Not Eligible";
        }
    }else if(athleteWeights.length === 4){
        if(sledWeight >= 210 && totalWeight <= 630){
            return "Eligible";
        }else{
            return "Not Eligible";
        }
    }
}

// console.log(checkEligibility([78], 165));
// console.log(checkEligibility([80], 160));
// console.log(checkEligibility([80], 170));
// console.log(checkEligibility([85, 90], 170));
// console.log(checkEligibility([85, 95], 168));
// console.log(checkEligibility([112, 97], 185));
// console.log(checkEligibility([110, 102, 90, 106], 222));
// console.log(checkEligibility([106, 99, 90, 88], 205));
// console.log(checkEligibility([106, 99, 103, 96], 227));