function resolutionStreak(days) {
    let N = 0;
    let X;
    let isFail = false;
    for(let i = 0; i < days.length; i++){
        if(days[i][0] >= 10000 && days[i][1] <= 120 && days[i][2] >= 5){
            N++;
        }else{
            X = i+1;
            isFail = true;
            break;
        }
    }

    if(isFail === true){
        return `Resolution failed on day ${X}: ${N} day streak.`;
    }else{
        return `Resolution on track: ${N} day streak.`;
    }
}

// console.log(resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9]]));
// console.log(resolutionStreak([[10000, 120, 5], [10950, 121, 11]]));
// console.log(resolutionStreak([[15000, 110, 8], [12300, 60, 13], [10100, 120, 4], [9000, 125, 4]]));
// console.log(resolutionStreak([[11600, 76, 13], [12556, 64, 26], [10404, 32, 59], [9999, 44, 124], [7508, 23, 167], [10900, 80, 0]]));
// console.log(resolutionStreak([[10500, 75, 15], [11000, 90, 10], [10650, 100, 9], [10200, 60, 10], [10678, 87, 9], [12431, 67, 13], [10444, 107, 19], [10111, 95, 5], [10000, 120, 7], [11980, 101, 8]]));