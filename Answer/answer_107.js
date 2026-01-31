function purgeMostFrequent(arr) {
    let max = mostFrequent(arr);
    let result = arr.filter(element => element !== max);
    return result;
}

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

// console.log(purgeMostFrequent([1, 2, 2, 3]));
// console.log(purgeMostFrequent(["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]));
// console.log(purgeMostFrequent(["red", "blue", "green", "red", "blue", "green", "blue"]));
// console.log(purgeMostFrequent([5, 5, 5, 5]));