function compareEnergy(caloriesBurned, wattHoursUsed) {
    let workoutEnergy = caloriesBurned*4184;
    let deviceEnergy = wattHoursUsed*3600;

    if(workoutEnergy > deviceEnergy){
        return "Workout";
    }else if(deviceEnergy > workoutEnergy){
        return "Devices";
    }else if(workoutEnergy === deviceEnergy){
        return "Equal";
    }
}

// console.log(compareEnergy(250, 50));
// console.log(compareEnergy(100, 200));
// console.log(compareEnergy(450, 523));
// console.log(compareEnergy(300, 75));
// console.log(compareEnergy(200, 250));
// console.log(compareEnergy(900, 1046));