function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {
    let city = {
        "Los Angeles": -8,
        "New York": -5,
        "London": 0,
        "Istanbul": +3,
        "Dubai": +4,
        "Hong Kong": +8,
        "Tokyo": +9
    };

    let timezoneDiff = Math.abs(city[arrivalCity] - city[departureCity]);
    
    let directionMultiplier = 1.0;
    if(direction === "east"){
        directionMultiplier = 1.5;
    }

    let result = timezoneDiff + (flightDuration * 0.1) * directionMultiplier;
    return result.toFixed(1);
}

// console.log(getJetLagHours("Istanbul", "Hong Kong", 10, "east"));
// console.log(getJetLagHours("London", "New York", 8, "west"));
// console.log(getJetLagHours("Hong Kong", "Tokyo", 4, "east"));
// console.log(getJetLagHours("Dubai", "London", 7, "west"));
// console.log(getJetLagHours("Los Angeles", "Hong Kong", 15, "west"));
// console.log(getJetLagHours("Tokyo", "Dubai", 9, "west"));
// console.log(getJetLagHours("New York", "Istanbul", 10, "east"));