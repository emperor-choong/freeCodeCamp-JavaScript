function flatten(arr) {
    return arr.flat(Infinity);
}

// console.log(flatten([1, [2, 3], 4]));
// console.log(flatten([5, [4, [3, 2]], 1]));
// console.log(flatten(["A", [[[["B"]]]], "C"]));
// console.log(flatten([["L", "M", "N"], ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]], "V", ["W", ["X", ["Y", ["Z"]]]]]));
// console.log(flatten([["red", ["blue", ["green", ["yellow", ["purple"]]]]], "orange", ["pink", ["brown"]]]));