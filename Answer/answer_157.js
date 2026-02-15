function calculatePenaltyDistance(rounds) {
    let result = rounds.reduce((accumulator, currentValue) => {
        return accumulator + (5-currentValue)*150;
    }, 0);

    return result;
}

// console.log(calculatePenaltyDistance([4, 4]));
// console.log(calculatePenaltyDistance([5, 5]));
// console.log(calculatePenaltyDistance([4, 5, 3, 5]));
// console.log(calculatePenaltyDistance([5, 4, 5, 5]));
// console.log(calculatePenaltyDistance([4, 3, 0, 3]));