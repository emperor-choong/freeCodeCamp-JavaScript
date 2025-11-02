function speeding(speeds, limit) {
    let overSpeed = speeds.filter((speed) => speed > limit);
    let sum = overSpeed.reduce((accumulator, currentValue) => accumulator + (currentValue-limit), 0);
    let average = overSpeed.length === 0 ? 0 : sum / overSpeed.length;

    return [overSpeed.length, average];
}

// console.log(speeding([50, 60, 55], 60));
// console.log(speeding([58, 50, 60, 55], 55));
// console.log(speeding([61, 81, 74, 88, 65, 71, 68], 70));
// console.log(speeding([100, 105, 95, 102], 100));
// console.log(speeding([40, 45, 44, 50, 112, 39], 55));