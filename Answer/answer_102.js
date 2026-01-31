function speedCheck(speedMph, speedLimitKph) {
    let speedKph = speedMph * 1.60934;
    if(speedKph <= speedLimitKph){
        return "Not Speeding";
    }else if(speedKph > speedLimitKph && speedKph <= speedLimitKph + 5){
        return "Warning";
    }else if(speedKph > speedLimitKph + 5){
        return "Ticket";
    }
}

// console.log(speedCheck(30, 70));
// console.log(speedCheck(40, 60));
// console.log(speedCheck(40, 65));
// console.log(speedCheck(60, 90));
// console.log(speedCheck(65, 100));
// console.log(speedCheck(88, 40));