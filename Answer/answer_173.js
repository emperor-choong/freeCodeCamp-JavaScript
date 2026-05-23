function countBusinessDays(start, end) {
    let [startYear, startMonth, startDay] = start.split("-").map(Number);
    let [endYear, endMonth, endDay] = end.split("-").map(Number);

    let startDate = new Date(startYear, startMonth - 1, startDay);
    let endDate = new Date(endYear, endMonth - 1, endDay);

    let count = 0;
    while(startDate <= endDate){
        let day = startDate.getDay();

        // 0 = Sunday, 6 = Saturday
        if (day !== 0 && day !== 6) {
            count++;
        }

        startDate.setDate(startDate.getDate() + 1);
    }

    return count;
}

// console.log(countBusinessDays("2026-02-24", "2026-02-26"));
// console.log(countBusinessDays("2026-02-24", "2026-02-28"));
// console.log(countBusinessDays("2026-02-21", "2026-03-01"));
// console.log(countBusinessDays("2026-03-08", "2026-03-17"));
// console.log(countBusinessDays("2026-02-24", "2027-02-24"));