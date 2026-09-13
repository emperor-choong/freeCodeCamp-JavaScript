function milePace(miles, duration) {
    let array = duration.split(":").map(Number);
    let seconds = array[0]*60 + array[1];

    let average = seconds / miles / 60;
    let min = Math.floor(average);
    let sec = Math.floor((average - min)*60);

    let result = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

    return result;
}

// console.log(milePace(3, "24:00"));
// console.log(milePace(1, "06:45"));
// console.log(milePace(2, "07:00"));
// console.log(milePace(26.2, "120:35"));