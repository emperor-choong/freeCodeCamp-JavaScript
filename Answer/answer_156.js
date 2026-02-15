function getLandingStance(startStance, rotation) {
    let x = Math.floor(Math.abs(rotation) / 180);
    if(x % 2 === 1){
        if(startStance === "Regular"){
            return "Goofy";
        }else if(startStance === "Goofy"){
            return "Regular";
        }
    }else if(x % 2 === 0){
        if(startStance === "Regular"){
            return "Regular";
        }else if(startStance === "Goofy"){
            return "Goofy";
        }
    }
}

// console.log(getLandingStance("Regular", 90));
// console.log(getLandingStance("Regular", 180));
// console.log(getLandingStance("Goofy", -270));
// console.log(getLandingStance("Regular", 2340));
// console.log(getLandingStance("Goofy", 2160));
// console.log(getLandingStance("Goofy", -540));