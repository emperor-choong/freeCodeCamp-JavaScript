function difference(arr1, arr2) {
    let common = arr1.filter(value => arr2.includes(value));

    let set1 = arr1.filter(value => !common.includes(value));
    let set2 = arr2.filter(value => !common.includes(value));

    let result = [...set1, ...set2];

    return result;
}

// console.log(difference([1, 2, 3], [3, 4, 5]));
// console.log(difference(["a", "b"], ["c", "b"]));
// console.log(difference([1, "a", 2], [2, "b", "a"]));
// console.log(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]));