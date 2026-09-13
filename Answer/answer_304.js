function bucketFill(grid, [row, col], newValue) {

    let startingValue = grid[row][col];
    grid[row][col] = newValue;
    let connected = [[row, col]];
    while(true){
        let [baris, kolum] = connected[0] // Array destructuring
        connected.shift();

        // move to left
        if(grid[baris][kolum-1] === startingValue){
            grid[baris][kolum-1] = newValue;
            connected.push([baris, kolum-1]);
        
        }

        // move to right
        if (grid[baris][kolum+1] === startingValue){
            grid[baris][kolum+1] = newValue;
            connected.push([baris, kolum+1]);
        
        }

        // move to top
        // Optional chaining (?.)
        if (grid[baris-1]?.[kolum] === startingValue){
            grid[baris-1][kolum] = newValue;
            connected.push([baris-1, kolum]);
        }

        // move to bottom
        if (grid[baris+1]?.[kolum] === startingValue){
            grid[baris+1][kolum] = newValue;
            connected.push([baris+1, kolum]);
        }

        if(connected.length === 0){
            break;
        }   
    }

    return grid;
}

// console.log(bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B"));
// console.log(bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B"));
// console.log(bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R"));
// console.log(bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y"));
// console.log(bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G"));

