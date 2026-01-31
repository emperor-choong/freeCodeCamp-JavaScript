function mostFrequent(arr) {
    let initialValue = new Map();
    let map = arr.reduce((accumulator, currentValue) => {
        if(accumulator.get(currentValue) === undefined){
            accumulator.set(currentValue, 1);
        }else{
            accumulator.set(currentValue, accumulator.get(currentValue) + 1);
        }

        return accumulator;
    }, initialValue);

    let result = [...map.keys()].reduce((accumulator, currentValue) => {
        return map.get(currentValue) > map.get(accumulator) ? currentValue : accumulator;
    });

    return result;
}

// console.log(mostFrequent(["a", "b", "a", "c"]));
// console.log(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]));
// console.log(mostFrequent([true, false, "false", "true", false]));
// console.log(mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]));