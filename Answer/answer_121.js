function findLeftHandedSeats(table) {
    let counter = 0;
    for(let i = 0; i < table.length; i++){
        for(let j = 0; j < table[i].length; j++){
            if(i === 0){
                if(table[i][j] === "U"){
                    if(table[i][j+1] !== "R"){
                        counter++;
                    }
                }
            }else if(i === 1){
                if(table[i][j] === "U"){
                    if(table[i][j-1] !== "R"){
                        counter++;
                    }
                }
            }
        }
    }

    return counter;
}

// console.log(findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]));
// console.log(findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]));
// console.log(findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]));
// console.log(findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]));
// console.log(findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]));