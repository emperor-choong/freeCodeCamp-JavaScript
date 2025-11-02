function hasExoplanet(readings) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sum = 0;
    let array = [];
    for(let i = 0; i < readings.length; i++){
        let isFound = false;
        for(let j = 0; j < alpha.length; j++){
            if(readings[i] === alpha[j]){
                let ascii = alpha.charCodeAt(j);
                let luminosity = ascii-55;
                sum = sum + luminosity;
                array.push(luminosity);
                isFound = true;
                break;
            }
        }

        if(isFound === false){
            sum = sum + parseInt(readings[i]);
            array.push(parseInt(readings[i]));
        }
    }

    let average = sum / readings.length;
    let result = array.some(reading => reading <= 0.8*average);

    return result;
}

// console.log(hasExoplanet("665544554"));
// console.log(hasExoplanet("FGFFCFFGG"));
// console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP"));
// console.log(hasExoplanet("FREECODECAMP"));
// console.log(hasExoplanet("9AB98AB9BC98A"));
// console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"));