function rotate(matrix) {
    let transposeMatrix = structuredClone(matrix);
    let row = matrix.length;
    for(let i = 0; i < row; i++){
        let column = matrix[i].length;
        for(let j = 0; j < column; j++){
            transposeMatrix[j][i] = matrix[i][j];
        }
    }

    for(let i = 0; i < row; i++){
        transposeMatrix[i].reverse();
    }

    return transposeMatrix;
}

// console.log(rotate([[1]]));
// console.log(rotate([[1, 2], [3, 4]]));
// console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]));