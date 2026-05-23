function getDayOfWeek(timestamp) {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const date = new Date(timestamp);
    return days[date.getUTCDay()];
}

// console.log(getDayOfWeek(1775492249000));
// console.log(getDayOfWeek(1766246400000));
// console.log(getDayOfWeek(33791256000000));
// console.log(getDayOfWeek(1773576000000));
// console.log(getDayOfWeek(0));