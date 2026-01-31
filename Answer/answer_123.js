function tireStatus(pressuresPSI, rangeBar) {
    let result = [];
    for(let i = 0; i < pressuresPSI.length; i++){
        let pressuresBar = pressuresPSI[i] / 14.5038;
        if(pressuresBar < rangeBar[0]){
            result.push("Low");
        }else if(pressuresBar >= rangeBar[0] && pressuresBar <= rangeBar[1]){
            result.push("Good");
        }else if(pressuresBar > rangeBar[1]){
            result.push("High");
        }
    }

    return result;
}

// console.log(tireStatus([32, 28, 35, 29], [2, 3]));
// console.log(tireStatus([32, 28, 35, 30], [2, 2.3]));
// console.log(tireStatus([29, 26, 31, 28], [2.1, 2.5]));
// console.log(tireStatus([31, 31, 30, 29], [1.5, 2]));
// console.log(tireStatus([30, 28, 30, 29], [1.9, 2.1]));