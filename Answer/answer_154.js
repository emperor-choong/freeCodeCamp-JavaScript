function countChange(change) {
    let sum = change.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return `$${(sum / 100).toFixed(2)}`;
}

// console.log(countChange([25, 10, 5, 1]));
// console.log(countChange([25, 10, 5, 1, 25, 10, 25, 1, 1, 10, 5, 25]));
// console.log(countChange([100, 25, 100, 1000, 5, 500, 2000, 25]));
// console.log(countChange([10, 5, 1, 10, 1, 25, 1, 1, 5, 1, 10]));
// console.log(countChange([1]));
// console.log(countChange([25, 25, 25, 25]));