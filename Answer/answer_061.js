function buildMatrix(rows, cols) {
    let result = [];
    for(let i = 0; i < rows; i++){
        let temp = [];
        for(let j = 0; j < cols; j++){
            temp.push(0);
        }

        result.push(temp);
    }

    return result;
}

// console.log(buildMatrix(2, 3));
// console.log(buildMatrix(3, 2));
// console.log(buildMatrix(4, 3));
// console.log(buildMatrix(9, 1));