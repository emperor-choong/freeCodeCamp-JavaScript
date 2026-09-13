function daysUntilBirthday(today, birthday) {
    const [year, month, day] = today.split("-").map(Number);
    const [bMonth, bDay] = birthday.split("/").map(Number);

    const todayDate = new Date(year, month - 1, day);

    let targetYear = year;

    if (bMonth === 2 && bDay === 29) {
        // Find the next actual Feb 29
        while (!isLeapYear(targetYear) ||
               new Date(targetYear, 1, 29) <= todayDate) {
            targetYear++;
        }
    } else {
        let birthdayThisYear = new Date(year, bMonth - 1, bDay);
        if (birthdayThisYear <= todayDate) {
            targetYear++;
        }
    }

    const nextBirthday = new Date(targetYear, bMonth - 1, bDay);
    return Math.round((nextBirthday - todayDate) / (1000 * 60 * 60 * 24));
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// console.log(daysUntilBirthday("2026-07-16", "9/7"));
// console.log(daysUntilBirthday("2026-07-16", "3/22"));
// console.log(daysUntilBirthday("2026-07-16", "7/16"));
// console.log(daysUntilBirthday("2024-02-28", "3/1"));
// console.log(daysUntilBirthday("2023-04-24", "12/30"));
// console.log(daysUntilBirthday("2024-03-01", "2/29"));
// console.log(daysUntilBirthday("2096-03-01", "2/29"));