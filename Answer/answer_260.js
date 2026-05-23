function getMeetingTime(availability) {
    let result = 0;
    while(result >= 0 && result <= 23){
        for(let i = 0; i < availability.length; i++){
            let isAvailable = false;
            for(let j = 0; j < availability[i].length; j++){
                let start = availability[i][j][0];
                let end = availability[i][j][1];
                if(result >= start && result < end){
                    isAvailable = true;
                    break;
                }
            }

            if(isAvailable === false){
                break;
            }
            
            if(i === availability.length-1){
                return result;
            }
        }

        result++;
    }

    return "None";   
}

// console.log(getMeetingTime([[[10, 12], [15, 16]], [[11, 14], [15, 16]]]));
// console.log(getMeetingTime([[[9, 10], [12, 15]], [[10, 11], [13, 14]], [[9, 11], [10, 14]]]));
// console.log(getMeetingTime([[[7, 8], [9, 11], [12, 14], [15, 16]], [[8, 11], [12, 13], [14, 15]]]));
// console.log(getMeetingTime([[[7, 8], [10, 12], [13, 15]], [[8, 11], [12, 13], [14, 15]], [[6, 7], [8, 9], [12, 13]]]));
// console.log(getMeetingTime([[[1, 3], [4, 6], [8, 10], [20, 23]], [[15, 16], [17, 18], [19, 22], [23, 24]], [[14, 16], [17, 23]], [[2, 4], [5, 6], [18, 19], [21, 22], [23, 24]]]));