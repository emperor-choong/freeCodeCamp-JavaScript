function getSpokenDuration(seconds) {
    let hour = Math.floor(seconds / 3600);
    let remainder = seconds % 3600;
    let minute = Math.floor(remainder / 60);
    let second = remainder % 60;

    let part1 = "";
    let part2 = "";
    let part3 = "";

    if(hour !== 0){
        part1 = hour === 1 ? `${hour} hour` : `${hour} hours`;
    }

    if(minute !== 0){
        part2 = minute === 1 ? `${minute} minute` : `${minute} minutes`;
    }

    if(second !== 0){
        part3 = second === 1 ? `${second} second` : `${second} seconds`;
    }

    if(hour !== 0 && minute !== 0 && second !== 0){
        return `${part1}, ${part2} and ${part3}`;
    }else if(hour === 0 && minute !== 0 && second !== 0){
        return `${part2} and ${part3}`;
    }else if(hour !== 0 && minute === 0 && second !== 0){
        return `${part1} and ${part3}`;
    }else if(hour !== 0 && minute !== 0 && second === 0){
        return `${part1} and ${part2}`;
    }else if(hour === 0 && minute === 0 && second !== 0){
        return `${part3}`;
    }else if(hour !== 0 && minute === 0 && second === 0){
        return `${part1}`;
    }else if(hour === 0 && minute !== 0 && second === 0){
        return `${part2}`;
    }
}

// console.log(getSpokenDuration(3723));
// console.log(getSpokenDuration(7295));
// console.log(getSpokenDuration(8521));
// console.log(getSpokenDuration(435));
// console.log(getSpokenDuration(14455));
// console.log(getSpokenDuration(72000));
// console.log(getSpokenDuration(1));