function canRetake(finishTime, currentTime) {
    let finishedMS = new Date(finishTime).getTime();
    let currentMS = new Date(currentTime).getTime();

    let diffMS = currentMS - finishedMS;
    let diffHours = diffMS / 1000 / 60 / 60;

    if(diffHours >= 48){
        return true;
    }else{
        return false;
    }
}

// console.log(canRetake("2026-03-23T08:00:00", "2026-03-25T14:00:00"));
// console.log(canRetake("2026-03-24T14:00:00", "2026-03-25T10:00:00"));
// console.log(canRetake("2026-03-23T09:25:00", "2026-03-25T09:25:00"));
// console.log(canRetake("2026-03-23T11:50:00", "2026-03-25T11:49:59"));