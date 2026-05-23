function getMovieNightCost(day, showtime, numberOfTickets) {
    let totalCost;
    if(day === "Friday" || day === "Saturday" || day === "Sunday"){
        totalCost = 12.00 * numberOfTickets;
        if(isBeforeFive(showtime) === true){
            totalCost = (12.00 - 2.00) * numberOfTickets;
        } 
    }else if(day === "Monday" || day === "Wednesday" || day === "Thursday"){
        totalCost = 10.00 * numberOfTickets;
        if(isBeforeFive(showtime) === true){
            totalCost = (10.00 - 2.00) * numberOfTickets;
        } 
    }else if(day === "Tuesday"){
        totalCost = 5.00 * numberOfTickets;
    }

    return "$" + totalCost.toFixed(2);
}

function isBeforeFive(showtime){
    let match = showtime.match(/^(1[0-2]|[1-9]):([0-5][0-9])(am|pm)$/);
    let hour = Number(match[1]);
    let minute = Number(match[2]);
    let ampm = match[3];

    if(ampm === "am" && hour === 12){
        hour = 0;
    }

    if(ampm === "pm" && hour !== 12){
        hour = hour + 12;
    }

    return hour < 17;
}

// console.log(getMovieNightCost("Saturday", "10:00pm", 1));
// console.log(getMovieNightCost("Sunday", "10:00am", 1));
// console.log(getMovieNightCost("Tuesday", "7:20pm", 2));
// console.log(getMovieNightCost("Wednesday", "5:40pm", 3));
// console.log(getMovieNightCost("Monday", "11:50am", 4));
// console.log(getMovieNightCost("Friday", "4:30pm", 5));
// console.log(getMovieNightCost("Tuesday", "11:30am", 1));