function transpose(matrix) {
    const result = [];

    for (let col = 0; col < matrix[0].length; col++) {
        const newRow = [];

        for (let row = 0; row < matrix.length; row++) {
            newRow.push(matrix[row][col]);
        }

        result.push(newRow);
    }

    return result;
}

// console.log(transpose([[1, 2, 3], [4, 5, 6]]));
// console.log(transpose([[1, 2], [3, 4], [5, 6]]));
// console.log(transpose([[1, 2], [3, 4], [5, 6], [7, 8]]));
// console.log(transpose([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"], ["j", "k", "l"]]));
// console.log(transpose([[true, false, true, false], [false, true, false, true], [true, true, false, false], [false, false, true, true], [true, false, false, true]]));