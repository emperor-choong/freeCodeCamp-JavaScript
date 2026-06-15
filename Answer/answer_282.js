function getZoneViolations(grid) {
    let label = {
        "i": ["R", "I"],
        "A": ["C"],
        "R": ["i", "C"],
        "I": ["i"],
        "C": ["R", "A"]
    };

    let result = [];
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === ""){
                continue;
            }
            
            // Optional chaining (?.)
            let left = grid[i][j-1];
            let right = grid[i][j+1];
            let top = grid[i-1]?.[j];
            let bottom = grid[i+1]?.[j];
            
            if(label[grid[i][j]].includes(left) || label[grid[i][j]].includes(right) || label[grid[i][j]].includes(top) || label[grid[i][j]].includes(bottom)){
                result.push([i, j]);
            }
        }
    }

    return result;
}

// console.log(getZoneViolations([["R", "C"], ["", "C"]]));
// console.log(getZoneViolations([["", "i"], ["", "R"], ["R", "I"]]));
// console.log(getZoneViolations([["A", "i", "C"], ["A", "", "C"], ["R", "R", "I"]]));
// console.log(getZoneViolations([["R", "R", "C", "R", "R"], ["R", "I", "C", "", "A"], ["R", "R", "", "i", "A"]]));
// console.log(getZoneViolations([["R", "A", "A", "", "i", "i"], ["R", "I", "", "C", "i", "i"], ["R", "", "C", "C", "A", "A"], ["R", "R", "C", "I", "R", "R"]]));