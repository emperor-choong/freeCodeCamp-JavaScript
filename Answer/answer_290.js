function getDaytimeHours(latitude) {
    let daylight = 12 + (latitude / 90) * 12;

    // Round to nearest even number
    daylight = Math.round(daylight / 2) * 2;

    // Sunrise and sunset centered around noon
    const sunrise = 12 - daylight / 2;
    const sunset = 12 + daylight / 2;

    let result = "";

    for (let hour = 0; hour < 24; hour++) {
        result += (hour >= sunrise && hour < sunset) ? "☀️" : "🌑";
    }

    return result;
}

// console.log(getDaytimeHours(0));
// console.log(getDaytimeHours(90));
// console.log(getDaytimeHours(-90));
// console.log(getDaytimeHours(-33));
// console.log(getDaytimeHours(66.5));
// console.log(getDaytimeHours(40));
// console.log(getDaytimeHours(-50));