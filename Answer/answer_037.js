function to12(time) {
    let hour = parseInt(time.slice(0, 2));
    let minute = parseInt(time.slice(2));

    let period = hour >= 12 ? "PM" : "AM";
    let hour12 = hour % 12 === 0 ? 12 : hour % 12;
    let minute12 = minute.toString().padStart(2, "0");

    return `${hour12}:${minute12} ${period}`;
}

// console.log(to12("1124"));
// console.log(to12("0900"));
// console.log(to12("1455"));
// console.log(to12("2346"));
// console.log(to12("0030"));
