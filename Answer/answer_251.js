function findOffender(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // first element is offender
            if (i === 0 || arr[i - 1] <= arr[i + 1]) {
                return i;
            }

            // second element is offender
            return i + 1;
        }
    }
}

// console.log(findOffender([1, 6, 2, 3, 4, 5]));
// console.log(findOffender([1, 2, 3, 5, 4, 5]));
// console.log(findOffender([2, 1]));
// console.log(findOffender([2, 4, 1, 6, 8]));
// console.log(findOffender([5, 18, 24, 33, 40, 55, 15, 68, 84, 91]));