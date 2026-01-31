function compressString(sentence) {
    let array = sentence.split(" ");

    let initialValue = {};
    let obj = array.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue] === undefined){
            accumulator[currentValue] = 1;
        }else{
            accumulator[currentValue] = accumulator[currentValue] + 1;
        }

        return accumulator;
    }, initialValue);

    let result = [];
    for(let [key, value] of Object.entries(obj)){
        if(value === 1){
            result.push(key);
        }else if(value > 1){
            result.push(`${key}(${value})`);
        }
    }

    return result.join(" ");
}

// console.log(compressString("yes yes yes please"));
// console.log(compressString("I have have have apples"));
// console.log(compressString("one one three and to the the the the"));
// console.log(compressString("route route route route route route tee tee tee tee tee tee"));