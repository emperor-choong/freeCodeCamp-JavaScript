function getDirection(time1, time2) {
    let t1 = toMinutes(time1);
    let t2 = toMinutes(time2);
    let total = 24 * 60;

    let forward = (t2 - t1 + total) % total;
    let backward = (t1 - t2 + total) % total;

    if(forward < backward){
        return "forward";
    }else if(backward < forward){
        return "backward";
    }else{
        return "equal";
    }
}

function toMinutes(time){
    let [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
}

// console.log(getDirection("10:00", "12:00"));
// console.log(getDirection("11:00", "05:00"));
// console.log(getDirection("00:00", "12:00"));
// console.log(getDirection("15:45", "01:10"));
// console.log(getDirection("03:30", "19:50"));
// console.log(getDirection("06:30", "18:30"));