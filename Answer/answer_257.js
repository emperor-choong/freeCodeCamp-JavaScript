function sleepDebt(hoursSlept, targetHours) {
    let idealSleep = targetHours * 7;

    let actualSleep = hoursSlept.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);

    return actualSleep >= idealSleep ? 0 : idealSleep - actualSleep; 
}

// console.log(sleepDebt([6, 6, 6, 6, 6, 6], 8));
// console.log(sleepDebt([6, 7, 8, 4, 8, 6], 7));
// console.log(sleepDebt([10, 10, 9, 10, 9, 11], 9));
// console.log(sleepDebt([8, 7, 6, 7, 6, 8], 6));
// console.log(sleepDebt([8, 9, 10, 9, 10, 7], 7));