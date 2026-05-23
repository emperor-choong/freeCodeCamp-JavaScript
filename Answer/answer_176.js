function shiftMatrix(matrix, shift) {
    let flatArray = matrix.flat();
    let rows = matrix.length;
    let columns = matrix[0].length;

    if(shift > 0){
        for(let i = 0; i < shift; i++){
            let x = flatArray.pop();
            flatArray.unshift(x);
        }
    }else if(shift < 0){
        for(let i = 0; i < Math.abs(shift); i++){
            let x = flatArray.shift();
            flatArray.push(x);
        }
    }

    let result = [];
    let j = 0;
    for(let i = 0; i < rows; i++){
        result.push(flatArray.slice(j, j + columns));
        j = j + columns;
    }

    return result;
}

// console.log(shiftMatrix([[1, 2, 3], [4, 5, 6]], 1));
// console.log(shiftMatrix([[1, 2, 3], [4, 5, 6]], -1));
// console.log(shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5));
// console.log(shiftMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], -6));
// console.log(shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 7));
// console.log(shiftMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -54));