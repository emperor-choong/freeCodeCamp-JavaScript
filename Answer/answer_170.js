function scoreCurling(house) {
    let button = house[2][2];
    // Start with upper left corner then rotate clockwise
    let ring1 = [house[1][1], house[1][2], house[1][3], house[2][3], house[3][3], house[3][2], house[3][1], house[2][1]];
    let ring2 = [house[0][0], house[0][1], house[0][2], house[0][3], house[0][4], house[1][4], house[2][4], house[3][4], house[4][4], house[4][3], house[4][2], house[4][1], house[4][0], house[3][0], house[2][0], house[1][0]];

    let totalRedInRing1 = ring1.reduce((accumulator, currentValue) => {
        if(currentValue === "R"){
            return accumulator + 1;
        }else{
            return accumulator;
        }
    }, 0);

    let totalRedInRing2 = ring2.reduce((accumulator, currentValue) => {
        if(currentValue === "R"){
            return accumulator + 1;
        }else{
            return accumulator;
        }
    }, 0);

    let totalYellowInRing1 = ring1.reduce((accumulator, currentValue) => {
        if(currentValue === "Y"){
            return accumulator + 1;
        }else{
            return accumulator;
        }
    }, 0);

    let totalYellowInRing2 = ring2.reduce((accumulator, currentValue) => {
        if(currentValue === "Y"){
            return accumulator + 1;
        }else{
            return accumulator;
        }
    }, 0);
    
    if(button === "R"){
        let sum = 1;
        let isPass = false;
        if(ring1.includes("R") === true && ring1.includes("Y") === false){
            sum = sum + totalRedInRing1;
            isPass = true;
        }

        if(ring2.includes("R") === true && ring2.includes("Y") === false && isPass === true){
            sum = sum + totalRedInRing2;
        }

        return `R: ${sum}`;
    }else if(button === "Y"){
        let sum = 1;
        let isPass = false;
        if(ring1.includes("Y") === true && ring1.includes("R") === false){
            sum = sum + totalYellowInRing1;
            isPass = true;
        }

        if(ring2.includes("Y") === true && ring2.includes("R") === false && isPass === true){
            sum = sum + totalYellowInRing2;
        }

        return `Y: ${sum}`;
    }else if(button === "."){
        if(ring1.includes("R") === true && ring1.includes("Y") === false){
            let sum = totalRedInRing1;
            if(ring2.includes("R") === true && ring2.includes("Y") === false){
                sum = sum + totalRedInRing2;
            }

            return `R: ${sum}`; 
        }else if(ring1.includes("Y") === true && ring1.includes("R") === false){
            let sum = totalYellowInRing1;
            if(ring2.includes("Y") === true && ring2.includes("R") === false){
                sum = sum + totalYellowInRing2;
            }

            return `Y: ${sum}`;
        }else{
            if(ring2.includes("R") === true && ring2.includes("Y") === false){
                let sum = totalRedInRing2;
                return `R: ${sum}`;
            }else if(ring2.includes("Y") === true && ring2.includes("R") === false){
                let sum = totalYellowInRing2;
                return `Y: ${sum}`;
            }
        }
    }

    return "No points awarded";
}

// console.log(scoreCurling([[".", ".", "R", ".", "."], [".", "R", ".", ".", "."], ["Y", ".", ".", ".", "."], [".", "R", ".", ".", "."], [".", ".", ".", ".", "."]]));
// console.log(scoreCurling([[".", ".", "R", ".", "."], [".", ".", ".", ".", "."], [".", ".", "Y", ".", "R"], [".", ".", "Y", "Y", "."], [".", "Y", "R", "R", "."]]));
// console.log(scoreCurling([[".", "R", "Y", ".", "."], ["Y", ".", ".", ".", "."], [".", ".", ".", ".", "."], [".", "Y", "R", "Y", "."], [".", ".", "R", "R", "."]]));
// console.log(scoreCurling([[".", "Y", "Y", ".", "."], ["Y", ".", ".", "R", "."], [".", ".", "R", ".", "."], [".", ".", "R", "R", "."], [".", "Y", "R", "Y", "."]]));
// console.log(scoreCurling([["Y", "Y", "Y", "Y", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "R", "Y", "R", "Y"], ["Y", "R", "R", "R", "Y"], ["Y", "Y", "Y", "Y", "Y"]]));
// console.log(scoreCurling([["Y", "R", "Y", "R", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", ".", "Y"], ["R", ".", ".", ".", "R"], ["Y", ".", ".", "R", "Y"]]));

