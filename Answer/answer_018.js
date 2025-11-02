function secondLargest(arr) {
    let mySet = new Set(arr);
    let unique = [...mySet];
    unique.sort((a, b) => a-b);
    return unique[unique.length - 2];
}

// console.log(secondLargest([1, 2, 3, 4]));
// console.log(secondLargest([20, 139, 94, 67, 31]));
// console.log(secondLargest([2, 3, 4, 6, 6]));
// console.log(secondLargest([10, -17, 55.5, 44, 91, 0]));
// console.log(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]));