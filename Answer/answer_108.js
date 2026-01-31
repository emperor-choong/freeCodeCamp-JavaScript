function daylightHours(latitude) {
    let table = [
        {Latitude: -90, DaylightHours: 24},
        {Latitude: -75, DaylightHours: 23},
        {Latitude: -60, DaylightHours: 21},
        {Latitude: -45, DaylightHours: 15},
        {Latitude: -30, DaylightHours: 13},
        {Latitude: -15, DaylightHours: 12},
        {Latitude: 0, DaylightHours: 12},
        {Latitude: 15, DaylightHours: 11},
        {Latitude: 30, DaylightHours: 10},
        {Latitude: 45, DaylightHours: 9},
        {Latitude: 60, DaylightHours: 6},
        {Latitude: 75, DaylightHours: 2},
        {Latitude: 90, DaylightHours: 0}
    ];

    let result = table.reduce((accumulator, currentValue) => {
        if(Math.abs(currentValue.Latitude - latitude) < Math.abs(accumulator.Latitude - latitude)){
            return currentValue;
        }else{
            return accumulator;
        }
    });

    return result.DaylightHours;
}

// console.log(daylightHours(45));
// console.log(daylightHours(0));
// console.log(daylightHours(-90));
// console.log(daylightHours(-10));
// console.log(daylightHours(23));
// console.log(daylightHours(88));
// console.log(daylightHours(-33));
// console.log(daylightHours(70));