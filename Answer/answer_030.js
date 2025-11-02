function goldilocksZone(mass) {
    let luminosity = mass**3.5;
    let start = 0.95*Math.sqrt(luminosity);
    let end = 1.37*Math.sqrt(luminosity);

    return [Math.round(start*100)/100, Math.round(end*100)/100];
}

// console.log(goldilocksZone(1));
// console.log(goldilocksZone(0.5));
// console.log(goldilocksZone(6));
// console.log(goldilocksZone(3.7));
// console.log(goldilocksZone(20));