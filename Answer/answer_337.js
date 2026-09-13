function isValidNonogram(clue, cells) {
    let sum = 0;
    let result = cells.reduce((accumulator, currentValue, currentIndex, array) => {
        if(currentValue === 0){
            if(sum !== 0){
                accumulator.push(sum);
                sum = 0;
            }
        }else{
            sum = sum + currentValue;
            if(currentIndex === array.length-1){
                accumulator.push(sum);
            }
        }

        return accumulator;
    }, []);

    return result.length === clue.length && result.every((element, index) => element === clue[index]);
}

// console.log(isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1]));
// console.log(isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1]));
// console.log(isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]));
// console.log(isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]));
// console.log(isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]));
// console.log(isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]));