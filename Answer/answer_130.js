function getNumberOfPlants(fieldSize, unit, crop) {
    let squareMeters;
    if(unit === "acres"){
        squareMeters = fieldSize*4046.86;
    }else if(unit === "hectares"){
        squareMeters = fieldSize*10000;
    }

    if(crop === "corn"){
        return Math.floor(squareMeters/1);
    }else if(crop === "wheat"){
        return Math.floor(squareMeters/0.1);
    }else if(crop === "soybeans"){
        return Math.floor(squareMeters/0.5);
    }else if(crop === "tomatoes"){
        return Math.floor(squareMeters/0.25);
    }else if(crop === "lettuce"){
        return Math.floor(squareMeters/0.2);
    }
}

// console.log(getNumberOfPlants(1, "acres", "corn"));
// console.log(getNumberOfPlants(2, "hectares", "lettuce"));
// console.log(getNumberOfPlants(20, "acres", "soybeans"));
// console.log(getNumberOfPlants(3.75, "hectares", "tomatoes"));
// console.log(getNumberOfPlants(16.75, "acres", "tomatoes"));