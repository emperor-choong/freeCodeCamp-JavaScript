function moonPhase(dateString) {
    let date1 = new Date("2000-01-06");
    let date2 = new Date(dateString);

    let diffInMs = date2.getTime() - date1.getTime(); 
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    let remainder = diffInDays % 28;
    let day = remainder + 1;

    if(day < 8){
        return "New";
    }else if(day < 15){
        return "Waxing";
    }else if(day < 22){
        return "Full";
    }else if(day < 29){
        return "Waning";
    }
}

// console.log(moonPhase("2000-01-12"));
// console.log(moonPhase("2000-01-13"));
// console.log(moonPhase("2014-10-15"));
// console.log(moonPhase("2012-10-21"));
// console.log(moonPhase("2022-12-14"));