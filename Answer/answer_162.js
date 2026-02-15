function getFastestSpeed(times) {
    let X = 0;
    let Y;
    let track = [320, 280, 350, 300, 250];
    for(let i = 0; i < times.length; i++){
        let speed = track[i] / times[i];
        if(speed > X){
            X = speed;
            Y = i+1;
        }
    }

    return `The luger's fastest speed was ${X.toFixed(2)} m/s on segment ${Y}.`;
}

// console.log(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]));
// console.log(getFastestSpeed([9.381, 7.417, 9.912, 8.815, 7.284]));
// console.log(getFastestSpeed([8.890, 7.601, 9.093, 8.392, 6.912]));
// console.log(getFastestSpeed([8.490, 7.732, 10.103, 8.489, 6.840]));
// console.log(getFastestSpeed([8.204, 7.230, 9.673, 7.645, 6.508]));