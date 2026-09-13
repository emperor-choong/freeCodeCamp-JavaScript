function bucketFill(grid, targetColor) {
    let position = [];
    let count = 0;
    let isComplete = false;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] !== targetColor){
                // Optional chaining (?.)
                let top = grid[i-1]?.[j];
                let bottom = grid[i+1]?.[j];
                let right = grid[i][j+1];
                let left = grid[i][j-1];

                if(top !== undefined && grid[i][j] === top){
                    position.push([i-1, j]);
                }
                
                if(bottom !== undefined && grid[i][j] === bottom){
                    position.push([i+1, j]);
                }
                
                if(right !== undefined && grid[i][j] === right){
                    position.push([i, j+1]);
                }
                
                if(left !== undefined && grid[i][j] === left){
                    position.push([i, j-1]);
                }

                grid[i][j] = targetColor;

                while(position.length !== 0){
                    let m = position[0][0];
                    let n = position[0][1];
                    
                    let top = grid[m-1]?.[n];
                    let bottom = grid[m+1]?.[n];
                    let right = grid[m][n+1];
                    let left = grid[m][n-1];

                    if(top !== undefined && grid[m][n] === top){
                        if(!position.some(element => element[0] === m-1 && element[1] === n)){
                            position.push([m-1, n]);
                        }
                    }
                    
                    if(bottom !== undefined && grid[m][n] === bottom){
                        if(!position.some(element => element[0] === m+1 && element[1] === n)){
                            position.push([m+1, n]);
                        }
                    }
                    
                    if(right !== undefined && grid[m][n] === right){
                        if(!position.some(element => element[0] === m && element[1] === n+1)){
                            position.push([m, n+1]);
                        }
                    }
                    
                    if(left !== undefined && grid[m][n] === left){
                        if(!position.some(element => element[0] === m && element[1] === n-1)){
                            position.push([m, n-1]);
                        }
                    }
                  
                    grid[m][n] = targetColor;
                    position.shift();   
                }

                count++;
            } 

            isComplete = grid.every(element1 => element1.every(element2 => element2 === targetColor));
            if(isComplete === true){
                break;
            }
        }

        if(isComplete === true){
            break;
        }
    }

    return count;
}

// console.log(bucketFill([["R", "R"], ["R", "R"]], "G"));
// console.log(bucketFill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B"));
// console.log(bucketFill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R"));
// console.log(bucketFill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P"));
// console.log(bucketFill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y"));


