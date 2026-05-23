function getShadow(time) {
    let [hour, minute] = time.split(":").map(Number);
    let t = hour + (minute / 60);

    if (t < 6 || t >= 18 || t === 12) {
        return "No shadow";
    }

    let diff = Math.abs(t - 12);
    let length = Math.pow(diff, 3);
    let direction = t < 12 ? "west" : "east";

    return `${length}ft ${direction}`;
}

// console.log(getShadow("10:00"));
// console.log(getShadow("15:00"));
// console.log(getShadow("12:00"));
// console.log(getShadow("17:30"));
// console.log(getShadow("05:00"));
// console.log(getShadow("06:00"));
// console.log(getShadow("18:00"));
// console.log(getShadow("07:30"));
// console.log(getShadow("00:00"));