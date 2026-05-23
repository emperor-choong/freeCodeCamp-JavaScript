function getGreeting(time) {
    const [hour, minute] = time.split(":").map(Number);

    if (hour >= 5 && hour <= 11) {
        return "Good morning";
    } else if (hour >= 12 && hour <= 17) {
        return "Good afternoon";
    } else if (hour >= 18 && hour <= 21) {
        return "Good evening";
    } else {
        return "Good night";
    }
}

// console.log(getGreeting("06:30"));
// console.log(getGreeting("12:00"));
// console.log(getGreeting("21:59"));
// console.log(getGreeting("00:01"));
// console.log(getGreeting("11:30"));