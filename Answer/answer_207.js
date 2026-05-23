function getDueDate(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);

    // Target month/year after adding 9 months
    let newMonth = month + 9;
    let newYear = year + Math.floor((newMonth - 1) / 12);
    newMonth = ((newMonth - 1) % 12) + 1;

    // Get last day of the target month
    const lastDay = new Date(newYear, newMonth, 0).getDate();

    // Use the smaller of original day or last day of new month
    const newDay = Math.min(day, lastDay);

    // Format with leading zeros
    const mm = String(newMonth).padStart(2, "0");
    const dd = String(newDay).padStart(2, "0");

    return `${newYear}-${mm}-${dd}`;
}

console.log(getDueDate("2025-03-30"));
console.log(getDueDate("2025-04-27"));
console.log(getDueDate("2025-05-29"));
console.log(getDueDate("2026-06-30"));
console.log(getDueDate("2026-10-11"));