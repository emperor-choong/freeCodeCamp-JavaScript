function elevatorStops(currentFloor, stops) {
    let result1 = [];
    let result2 = [];
    let stops1 = [...stops];
    let stops2 = [...stops];
    let totalDistanceFloorTravel1 = 0;
    let totalDistanceFloorTravel2 = 0;

    let index = twoStartValue(currentFloor, stops);

    result1 = arrayOfOrder(index[0], stops1[index[0]], stops1);

    if(index[1] !== undefined){
        result2 = arrayOfOrder(index[1], stops2[index[1]], stops2);

        totalDistanceFloorTravel2 = result2.reduce((accumulator, currentValue, currentIndex, array) => {
            if(currentIndex === array.length - 1){
                return accumulator;
            }else{
                return accumulator + Math.abs(array[currentIndex + 1] - currentValue); 
            }
        }, 0);
    }

    totalDistanceFloorTravel1 = result1.reduce((accumulator, currentValue, currentIndex, array) => {
        if(currentIndex === array.length - 1){
            return accumulator;
        }else{
            return accumulator + Math.abs(array[currentIndex + 1] - currentValue); 
        }
    }, 0);

    if(totalDistanceFloorTravel2 === 0){
        return result1;
    }else{
        if(totalDistanceFloorTravel1 === totalDistanceFloorTravel2){
            if(result1[0] > result2[0]){
                return result1;
            }else{
                return result2;
            }
        }else if(totalDistanceFloorTravel1 < totalDistanceFloorTravel2){
            return result1;
        }else if(totalDistanceFloorTravel2 < totalDistanceFloorTravel1){
            return result2;
        }
    } 
}

function indexFloorWithSmallestDistance(currentFloor, stops){
    let minimum = Infinity;
    let result;
    for(let i = 0; i < stops.length; i++){
        let distance = Math.abs(currentFloor - stops[i]); 
        if(distance < minimum){
            minimum = distance;
            result = i;
        }
    }

    return result;
}

function twoStartValue(currentFloor, stops){
    let minimum = Infinity;
    for(let i = 0; i < stops.length; i++){
        let distance = Math.abs(currentFloor - stops[i]); 
        if(distance < minimum){
            minimum = distance;
        }
    }

    let result = [];
    for(let i = 0; i < stops.length; i++){
        let distance = Math.abs(currentFloor - stops[i]); 
        if(distance === minimum){
            result.push(i);
        }
    }

    return result;
}

function arrayOfOrder(index, currentFloor, stops){
    let result = [];
    result.push(currentFloor);
    stops.splice(index, 1);

    while(true){
        let i = indexFloorWithSmallestDistance(currentFloor, stops);
        result.push(stops[i]);
        currentFloor = stops[i];
        stops.splice(i, 1);

        if(stops.length === 0){
            break;
        }
    }

    return result;
}

// console.log(elevatorStops(5, [2, 8, 3, 9]));
// console.log(elevatorStops(6, [2, 10, 8, 3, 1, 9]));
// console.log(elevatorStops(1, [4, 8, 3, 6, 9]));
// console.log(elevatorStops(12, [6, 10, 7, 3, 1, 4]));
// console.log(elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]));