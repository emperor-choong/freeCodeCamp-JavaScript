function solveMagicSquare(grid) {
    let withZero = [];
    let withoutZero = [];
    for(let i = 0; i < grid.length; i++){
        let sumRow = 0;
        let sumColumn = 0;
        let isZero = false;
        for(let j = 0; j < grid[i].length; j++){
            sumRow = sumRow + grid[i][j];
            if(grid[i][j] === 0){
                isZero = true;
            }

            sumColumn = sumColumn + grid[j][i];
            if(grid[j][i] === 0){
                isZero = true;
            }
        }

        if(isZero === true){
            if(sumRow !== 0){
                withZero.push(sumRow);
            }

            if(sumColumn !== 0){
                withZero.push(sumColumn);
            }
        }else if(isZero === false){
            if(sumRow !== 0){
                withoutZero.push(sumRow);
            }

            if(sumColumn !== 0){
                withoutZero.push(sumColumn);
            }
        }
    }

    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;
    let isZero1 = false;
    let isZero2 = false;
    for(let i = 0; i < grid.length; i++){
        sumDiagonal1 = sumDiagonal1 + grid[i][i];
        sumDiagonal2 = sumDiagonal2 + grid[i][grid.length - 1 - i];
        if(grid[i][i] === 0){
            isZero1 = true;
        }

        if(grid[i][grid.length - 1 - i] === 0){
            isZero2 = true;
        }
    }

    if(isZero1 === true){
        withZero.push(sumDiagonal1);
    }else if(isZero1 === false){
        withoutZero.push(sumDiagonal1);
    }

    if(isZero2 === true){
        withZero.push(sumDiagonal2);
    }else if(isZero2 === false){
        withoutZero.push(sumDiagonal2);
    }

    let result1 = withZero.every((element, index, array) => {
        return element === array[0];
    });

    let result2 = withoutZero.every((element, index, array) => {
        return element === array[0];
    });

    return (result1 && result2) ? (withoutZero[0] - withZero[0]) : "impossible";
}

// console.log(solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]));
// console.log(solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]));
// console.log(solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]));
// console.log(solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]));
// console.log(solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]));