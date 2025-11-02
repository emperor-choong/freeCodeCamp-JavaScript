function findMissingNumbers(arr) {
    let n = Math.max(...arr);

    let array = [];
    for(let i = 1; i <= n; i++){
        array.push(i);
    }

    let result = array.filter((num) => !arr.includes(num));
    return result;
}

// console.log(findMissingNumbers([1, 3, 5]));
// console.log(findMissingNumbers([1, 2, 3, 4, 5]));
// console.log(findMissingNumbers([1, 10]));
// console.log(findMissingNumbers([10, 1, 10, 1, 10, 1]));
// console.log(findMissingNumbers([3, 1, 4, 1, 5, 9]));
// console.log(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]));