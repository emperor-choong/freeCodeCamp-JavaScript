function gameOfLife(grid) {
    let result = [];
    for(let i = 0; i < grid.length; i++){
        let row = [];
        for(let j = 0; j < grid[i].length; j++){
            // Optional chaining (?.)
            let top = grid[i-1]?.[j];
            let bottom = grid[i+1]?.[j];
            let right = grid[i]?.[j+1];
            let left = grid[i]?.[j-1];
            let upperRight = grid[i-1]?.[j+1];
            let upperLeft = grid[i-1]?.[j-1];
            let bottomRight = grid[i+1]?.[j+1];
            let bottomLeft = grid[i+1]?.[j-1];
            
            // Nullish coalescing operator (??) 
            let sum = (top ?? 0) + (bottom ?? 0) + (right ?? 0) + (left ?? 0) + (upperRight ?? 0) + (upperLeft ?? 0) + (bottomRight ?? 0) + (bottomLeft ?? 0);

            if(grid[i][j] === 1){
                if(sum < 2){
                    row.push(0);
                }else if(sum === 2 || sum === 3){
                    row.push(1);
                }else if(sum > 3){
                    row.push(0);
                }
            }else if(grid[i][j] === 0){
                if(sum === 3){
                    row.push(1);
                }else{
                    row.push(grid[i][j]);
                }
            }
        }

        result.push(row);
    }

    return result;
}

// console.log(gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]));
// console.log(gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]));
// console.log(gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));
// console.log(gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]));