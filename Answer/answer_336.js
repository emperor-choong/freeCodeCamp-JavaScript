function getSpokenTime(hourAngle, minuteAngle) {
    let y = Math.floor(hourAngle / 360 * 12);
    let x = Math.floor(minuteAngle / 360 * 60);
    let z = y + 1;

    if(x === 0){
        return `${y} o'clock`;
    }else if(x === 15){
        return `quarter past ${y}`;
    }else if(x >= 1 && x <= 29){
        return `${x} minutes past ${y}`;
    }else if(x === 30){
        return `half past ${y}`;
    }else if(x === 45){
        return `quarter to ${z}`;
    }else if(x >= 31 && x <= 59){
        return `${60-x} minutes to ${z}`;
    }
}

// console.log(getSpokenTime(90, 0));
// console.log(getSpokenTime(160, 120));
// console.log(getSpokenTime(255, 180));
// console.log(getSpokenTime(67.5, 92));
// console.log(getSpokenTime(200, 240));
// console.log(getSpokenTime(322.5, 273));
// console.log(getSpokenTime(117.5, 335));