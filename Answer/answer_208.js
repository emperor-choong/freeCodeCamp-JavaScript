function alarmCheck(alarmTime, wakeTime) {
    let alarm = toMinutes(alarmTime);
    let wake = toMinutes(wakeTime);

    if(wake < alarm){
        return "early";
    }else if(wake <= alarm + 10){
        return "on time";
    }else if(wake > alarm + 10){
        return "late";
    }
}

function toMinutes(time){
    let [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

// console.log(alarmCheck("07:00", "06:45"));
// console.log(alarmCheck("06:30", "06:30"));
// console.log(alarmCheck("08:10", "08:15"));
// console.log(alarmCheck("09:30", "09:45"));
// console.log(alarmCheck("08:15", "08:25"));
// console.log(alarmCheck("05:45", "05:56"));
// console.log(alarmCheck("04:30", "04:00"));