function launchFuel(payload) {
    let initialFuel = payload / 5;
    let totalMass = payload + initialFuel; 
    let fuel = totalMass / 5; 
    let additionalFuel = fuel - initialFuel; 
    
    while(additionalFuel >= 1){
        totalMass = totalMass + additionalFuel; 
        let previousFuel = fuel; 
        fuel = totalMass / 5; 
        additionalFuel = fuel - previousFuel; 
    }
       
    return Math.round(fuel*10) / 10;
}

// console.log(launchFuel(50));
// console.log(launchFuel(500));
// console.log(launchFuel(243));
// console.log(launchFuel(11000));
// console.log(launchFuel(6214));