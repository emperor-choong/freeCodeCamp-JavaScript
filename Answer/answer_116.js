function fuelToAdd(currentGallons, requiredLiters) {
    let requiredGallons = Math.ceil(requiredLiters/3.78541);
    if(currentGallons < requiredGallons){
        return requiredGallons-currentGallons;
    }else{
        return 0;
    }
}

// console.log(fuelToAdd(0, 1));
// console.log(fuelToAdd(5, 40));
// console.log(fuelToAdd(10, 30));
// console.log(fuelToAdd(896, 20500));
// console.log(fuelToAdd(1000, 50000));