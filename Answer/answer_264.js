function sumOfDifferences(arr) {
    let result = arr.reduce((accumulator, currentValue, currentIndex, array) => {
        if(currentIndex === array.length-1){
            return accumulator;
        }else{
            return accumulator + (array[currentIndex + 1] - currentValue);
        }
    }, 0);

    return result;
}

// console.log(sumOfDifferences([1, 3, 4]));
// console.log(sumOfDifferences([5, -3, 3, 9, 10]));
// console.log(sumOfDifferences([9, 6, 15, -20, 33, 14, 25, 16, -7]));
// console.log(sumOfDifferences([50, 102, -46, 82, -49, 29, 71, 902, -237, 111, -61, 75]));