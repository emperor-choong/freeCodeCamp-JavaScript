function calculateParkingFee(parkTime, pickupTime) {
    let parkTimeMinutes = toMinutes(parkTime);
    let pickupTimeMinutes = toMinutes(pickupTime);

    let overnightFee = 0;

    if(pickupTimeMinutes < parkTimeMinutes){
        pickupTimeMinutes = pickupTimeMinutes + 24*60;
        overnightFee = 10;
    }

    let diff = pickupTimeMinutes - parkTimeMinutes;
    let hours = Math.ceil(diff / 60);
    let cost = hours*3 + overnightFee;
    if(cost < 5){
        cost = 5;
    }

    return `$${cost}`;
}

function toMinutes(time){
    let [hour, minute] = time.split(":").map(x => Number(x));
    return hour*60 + minute;
}

// console.log(calculateParkingFee("09:00", "11:00"));
// console.log(calculateParkingFee("10:00", "10:30"));
// console.log(calculateParkingFee("08:10", "10:45"));
// console.log(calculateParkingFee("14:40", "23:10"));
// console.log(calculateParkingFee("18:15", "01:30"));
// console.log(calculateParkingFee("11:11", "11:10"));