function medicationReminder(medications, currentTime) {
    let current = toMinutes(currentTime);

    let nextName = "";
    let minDiff = Infinity;

    for(let [name, lastTaken] of medications){
        let nextTimes = [];

        if(name === "Deployxitrin"){
            nextTimes = ["08:00", "16:00"];
        }else if(name === "Debuggamanizole"){
            nextTimes = ["07:00", "13:00", "21:00"];
        }else if(name === "Mergeflictamine"){
            let next = (toMinutes(lastTaken) + 4*60) % (24*60);
            nextTimes = [next];
        }

        for(let time of nextTimes){
            let nextMinute;
            if(typeof time === "string"){
                nextMinute = toMinutes(time);
            }else{
                nextMinute = time;
            }

            let diff = nextMinute - current;
            if(diff <= 0){
                diff = diff + 24*60;
            }

            if(diff < minDiff){
                minDiff = diff;
                nextName = name;
            }
        } 
    }

    return `${nextName} in ${formatTime(minDiff)}`;
}

function toMinutes(time){
    let [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
}

function formatTime(minutes){
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    return `${h}h ${m}m`;
}

// console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00"));
// console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "14:55"));
// console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "17:15"));
// console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "09:00"]], "12:59"));
// console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "21:00"], ["Mergeflictamine", "03:00"]], "06:55"));
// console.log(medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "07:30"]], "08:00"));