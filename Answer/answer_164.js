function getHillRating(drop, distance, type) {
    let steepness = drop / distance;
    let adjustedSteepness;
    if(type === "Downhill"){
        adjustedSteepness = steepness*1.2;
    }else if(type === "Slalom"){
        adjustedSteepness = steepness*0.9;
    }else if(type === "Giant Slalom"){
        adjustedSteepness = steepness*1.0;
    }

    if(adjustedSteepness <= 0.1){
        return "Green";
    }else if(adjustedSteepness <= 0.25){
        return "Blue";
    }else if(adjustedSteepness > 0.25){
        return "Black";
    }
}

// console.log(getHillRating(95, 900, "Slalom"));
// console.log(getHillRating(620, 2800, "Downhill"));
// console.log(getHillRating(420, 1680, "Giant Slalom"));
// console.log(getHillRating(250, 3000, "Downhill"));
// console.log(getHillRating(110, 900, "Slalom"));
// console.log(getHillRating(380, 1500, "Giant Slalom"));