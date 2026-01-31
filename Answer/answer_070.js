function daysUntilWeekend(dateString) {
    let date = new Date(dateString);
    if(date.getDay() === 0 || date.getDay() === 6){
        return "It's the weekend!";
    }else{
        let x = 6 - date.getDay();
        if(x === 1){
            return `${x} day until the weekend.`
        }else{
            return `${x} days until the weekend.`
        }
    }
}

// console.log(daysUntilWeekend("2025-11-14"));
// console.log(daysUntilWeekend("2025-01-01"));
// console.log(daysUntilWeekend("2025-12-06"));
// console.log(daysUntilWeekend("2026-01-27"));
// console.log(daysUntilWeekend("2026-09-07"));
// console.log(daysUntilWeekend("2026-11-29"));