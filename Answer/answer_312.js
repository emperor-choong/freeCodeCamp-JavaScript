function getTallyCount(str) {
    let array = str.split(" ");
    let result = array.reduce((accumulator, currentValue) => {
        if(currentValue === "||||/"){
            return accumulator + 5;
        }else{
            return accumulator + currentValue.length;
        }
    }, 0);

    return result;
}

// console.log(getTallyCount("||||"));
// console.log(getTallyCount("||||/"));
// console.log(getTallyCount("||||/ |||"));
// console.log(getTallyCount("||||/ ||||/ ||||/ ||"));
// console.log(getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |"));