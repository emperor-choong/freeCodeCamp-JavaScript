function adjustThermostat(currentF, targetC) {
    let targetF = (targetC * 1.8) + 32;
    if(currentF < targetF){
        return `Heat: ${(targetF-currentF).toFixed(1)} degrees Fahrenheit`;
    }else if(currentF > targetF){
        return `Cool: ${(currentF-targetF).toFixed(1)} degrees Fahrenheit`;
    }else{
        return "Hold";
    }
}

// console.log(adjustThermostat(32, 0));
// console.log(adjustThermostat(70, 25));
// console.log(adjustThermostat(72, 18));
// console.log(adjustThermostat(212, 100));
// console.log(adjustThermostat(59, 22));