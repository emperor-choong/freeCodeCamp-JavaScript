function getWeekday(dateString) {
    let date = new Date(dateString);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let dayName = days[date.getDay()];

    return dayName;
}

// console.log(getWeekday("2025-11-06"));
// console.log(getWeekday("1999-12-31"));
// console.log(getWeekday("1111-11-11"));
// console.log(getWeekday("2112-12-21"));
// console.log(getWeekday("2345-10-01"));