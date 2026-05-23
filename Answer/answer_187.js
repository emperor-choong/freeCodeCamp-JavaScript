function insertIntoArray(arr, value, index) {
    arr.splice(index, 0, value);
    return arr;
}

// console.log(insertIntoArray([2, 4, 8, 10], 6, 2));
// console.log(insertIntoArray(["the", "quick", "fox"], "brown", 2));
// console.log(insertIntoArray([], 0, 0));
// console.log(insertIntoArray([0, 1, 1, 2, 3, 8, 13], 5, 5));