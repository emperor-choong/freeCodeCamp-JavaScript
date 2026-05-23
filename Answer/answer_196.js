function invertMatrix(matrix) {
    let unique = new Set(matrix.flat());
    let [value1, value2] = unique;
    let result = matrix.map(array => {
        let inverted = array.map(x => {
            return x === value1 ? value2 : value1;
        });

        return inverted;
    })

    return result;
}

// console.log(invertMatrix([["a", "b"], ["a", "a"]]));
// console.log(invertMatrix([[1, 0, 1], [1, 1, 1], [0, 1, 0]]));
// console.log(invertMatrix([["apple", "banana", "banana", "apple"], ["banana", "apple", "apple", "banana"], ["banana", "banana", "banana", "apple"]]));
// console.log(invertMatrix([[6, 7, 7, 7, 6], [7, 6, 7, 6, 7], [7, 7, 6, 7, 7], [7, 6, 7, 6, 7], [6, 7, 7, 7, 6]]));
// console.log(invertMatrix([[1.2, 2.1, 2.1, 2.1], [2.1, 1.2, 2.1, 1.2], [1.2, 1.2, 2.1, 2.1]]));